from PIL import Image, ImageDraw, ImageFont, ImageFilter

width = 1200
height = 630

# Base dark canvas
img = Image.new('RGB', (width, height), (7, 9, 14))

# Create smooth glow layer
glow_layer = Image.new('RGBA', (width, height), (0, 0, 0, 0))
glow_draw = ImageDraw.Draw(glow_layer)

# Soft cyan radial glow behind the badge
for r in range(420, 0, -10):
    alpha = int(48 * (1 - (r / 420)**1.4))
    glow_draw.ellipse(
        [width//2 - r, 180 - r, width//2 + r, 180 + r],
        fill=(45, 212, 191, alpha)
    )

glow_layer = glow_layer.filter(ImageFilter.GaussianBlur(35))
img.paste(glow_layer, (0, 0), glow_layer)

draw = ImageDraw.Draw(img)

# Outer delicate border
draw.rectangle([14, 14, width - 15, height - 15], outline=(45, 212, 191, 70), width=1)

# Badge container for 'A'
badge_size = 114
bx = width // 2 - badge_size // 2
by = 80
draw.rounded_rectangle([bx, by, bx + badge_size, by + badge_size], radius=26, fill=(255, 255, 255))

try:
    font_a = ImageFont.truetype("arialbd.ttf", 72)
    font_brand = ImageFont.truetype("arialbd.ttf", 54)
    font_sub = ImageFont.truetype("arialbd.ttf", 20)
    font_desc = ImageFont.truetype("arialbd.ttf", 26)
    font_pill = ImageFont.truetype("arialbd.ttf", 16)
    font_url = ImageFont.truetype("arialbd.ttf", 20)
except:
    font_a = font_brand = font_sub = font_desc = font_pill = font_url = ImageFont.load_default()

# Draw 'A'
bbox = draw.textbbox((0, 0), "A", font=font_a)
tw = bbox[2] - bbox[0]
th = bbox[3] - bbox[1]
draw.text((bx + (badge_size - tw) // 2, by + (badge_size - th) // 2 - 6), "A", fill=(9, 10, 15), font=font_a)

# "ANDRADE"
b_text = "ANDRADE"
b_box = draw.textbbox((0, 0), b_text, font=font_brand)
draw.text(((width - (b_box[2] - b_box[0])) // 2, 224), b_text, fill=(255, 255, 255), font=font_brand)

# "SERVIÇOS DE TECNOLOGIA"
s_text = "SERVIÇOS DE TECNOLOGIA"
s_box = draw.textbbox((0, 0), s_text, font=font_sub)
draw.text(((width - (s_box[2] - s_box[0])) // 2, 292), s_text, fill=(45, 212, 191), font=font_sub)

# Tagline: "Engenharia de Software com Inteligência Artificial, GEO & SEO"
d_text = "Engenharia de Software com Inteligência Artificial, GEO & SEO"
d_box = draw.textbbox((0, 0), d_text, font=font_desc)
draw.text(((width - (d_box[2] - d_box[0])) // 2, 348), d_text, fill=(241, 245, 249), font=font_desc)

# 3 Feature Pills
pills = ["3x Mais Rápido com IA", "Otimizado para GEO & Google", "Código Seguro & LGPD"]
total_pills_w = 0
pill_rendered = []

for p in pills:
    pb = draw.textbbox((0, 0), p, font=font_pill)
    pw = pb[2] - pb[0] + 36
    ph = pb[3] - pb[1] + 20
    pill_rendered.append((p, pw, ph))
    total_pills_w += pw + 18
total_pills_w -= 18

start_x = (width - total_pills_w) // 2
curr_x = start_x
py = 425

for p, pw, ph in pill_rendered:
    draw.rounded_rectangle([curr_x, py, curr_x + pw, py + ph], radius=14, fill=(15, 23, 42), outline=(45, 212, 191), width=1)
    # bullet point dot
    draw.ellipse([curr_x + 14, py + ph//2 - 3, curr_x + 20, py + ph//2 + 3], fill=(45, 212, 191))
    draw.text((curr_x + 28, py + 9), p, fill=(45, 212, 191), font=font_pill)
    curr_x += pw + 18

# Footer Domain
u_text = "tecnologiandrade.com.br"
u_box = draw.textbbox((0, 0), u_text, font=font_url)
draw.text(((width - (u_box[2] - u_box[0])) // 2, 538), u_text, fill=(148, 163, 184), font=font_url)

img.save('public/og-image.png', 'PNG', quality=95)
print("Perfect og-image.png created!")
