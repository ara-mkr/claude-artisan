import os
import glob
from PIL import Image, ImageDraw, ImageFont

def create_title_card(width, height):
    # Create an image with a dark gradient background
    img = Image.new('RGB', (width, height), color='#0f172a')
    draw = ImageDraw.Draw(img)
    
    # Draw simple gradient
    for y in range(height):
        # Blend from deep slate-900 to deep indigo-950
        r = int(15 + (30 - 15) * (y / height))
        g = int(23 + (27 - 23) * (y / height))
        b = int(42 + (75 - 42) * (y / height))
        draw.line([(0, y), (width, y)], fill=(r, g, b))
    
    # Find a premium font on macOS
    font_paths = [
        "/System/Library/Fonts/Helvetica.ttc",
        "/System/Library/Fonts/Supplemental/Arial.ttf",
        "/System/Library/Fonts/SFNS.ttf"
    ]
    title_font = None
    subtitle_font = None
    for path in font_paths:
        if os.path.exists(path):
            try:
                title_font = ImageFont.truetype(path, 36)
                subtitle_font = ImageFont.truetype(path, 16)
                break
            except Exception:
                continue
                
    if title_font is None:
        title_font = ImageFont.load_default()
        subtitle_font = ImageFont.load_default()
        
    # Draw Title
    title_text = "CLAUDE ARTISAN"
    subtitle_text = "186 DESIGN STYLES / 9 FAMILIES"
    
    # Text positioning
    if hasattr(draw, 'textbbox'):
        # Pillow 10+
        tb = draw.textbbox((0, 0), title_text, font=title_font)
        tw, th = tb[2] - tb[0], tb[3] - tb[1]
        sb = draw.textbbox((0, 0), subtitle_text, font=subtitle_font)
        sw, sh = sb[2] - sb[0], sb[3] - sb[1]
    else:
        # Legacy Pillow support
        tw, th = draw.textsize(title_text, font=title_font)
        sw, sh = draw.textsize(subtitle_text, font=subtitle_font)
        
    tx = (width - tw) / 2
    ty = (height - th - sh - 20) / 2
    draw.text((tx, ty), title_text, fill=(255, 255, 255), font=title_font)
    
    sx = (width - sw) / 2
    sy = ty + th + 20
    draw.text((sx, sy), subtitle_text, fill=(147, 197, 253), font=subtitle_font)
    
    # Draw a thin border inside the card
    draw.rectangle([15, 15, width - 16, height - 16], outline=(59, 130, 246), width=2)
    return img

def stitch():
    assets_dir = "/Users/akhilraja-amudhan/Documents/Claude Artisan/design-language/assets/readme-assets"
    output_path = "/Users/akhilraja-amudhan/Documents/Claude Artisan/design-language/assets/banner_grid_landscape.png"
    
    # Get all PNG images (excluding any hidden files starting with .)
    images_paths = sorted([
        f for f in glob.glob(os.path.join(assets_dir, "*.png"))
        if not os.path.basename(f).startswith('.')
    ])
    
    print(f"Found {len(images_paths)} style images.")
    
    cols = 17
    rows = 11
    cell_w = 448
    cell_h = 280
    
    total_w = cols * cell_w
    total_h = rows * cell_h
    
    # Create the large master canvas
    canvas = Image.new('RGB', (total_w, total_h), color='#000000')
    
    # Generate the Title Card for the first cell (row 0, col 0)
    title_card = create_title_card(cell_w, cell_h)
    canvas.paste(title_card, (0, 0))
    
    # Paste all style images
    for idx, img_path in enumerate(images_paths):
        grid_idx = idx + 1
        r = grid_idx // cols
        c = grid_idx % cols
        
        x = c * cell_w
        y = r * cell_h
        
        try:
            with Image.open(img_path) as img:
                # Resize image to fit cell exactly
                resized_img = img.resize((cell_w, cell_h), Image.Resampling.LANCZOS)
                canvas.paste(resized_img, (x, y))
        except Exception as e:
            print(f"Error processing {img_path}: {e}")
            
    # Save the final high-quality master banner
    canvas.save(output_path, "PNG", optimize=True)
    print(f"Banner successfully created and saved to {output_path} ({total_w}x{total_h}px)!")

if __name__ == "__main__":
    stitch()
