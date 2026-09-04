import os
from PIL import Image, ImageDraw, ImageFont

# Canvas dimensions
width = 1720
height = 1080

# Base dark matte canvas
img = Image.new('RGB', (width, height), (9, 10, 15)) # #090A0F
draw = ImageDraw.Draw(img)

# Outer hairline border
draw.rectangle([16, 16, width - 17, height - 17], outline=(30, 35, 48), width=1)
draw.rectangle([20, 20, width - 21, height - 21], outline=(45, 212, 191, 50), width=1)

# Load fonts
try:
    font_title = ImageFont.truetype("arialbd.ttf", 36)
    font_subtitle = ImageFont.truetype("arialbd.ttf", 17)
    font_cat = ImageFont.truetype("arialbd.ttf", 19)
    font_name = ImageFont.truetype("arialbd.ttf", 15)
    font_hex = ImageFont.truetype("consola.ttf", 17)
    font_rgb = ImageFont.truetype("consola.ttf", 13)
    font_desc = ImageFont.truetype("arial.ttf", 13)
    font_footer = ImageFont.truetype("arial.ttf", 14)
except Exception:
    font_title = font_subtitle = font_cat = font_name = font_hex = font_rgb = font_desc = font_footer = ImageFont.load_default()

# Header
# Badge container for 'A'
badge_size = 54
bx = 50
by = 42
draw.rounded_rectangle([bx, by, bx + badge_size, by + badge_size], radius=12, fill=(255, 255, 255))
draw.text((bx + 14, by + 6), "A", fill=(9, 10, 15), font=font_title)

draw.text((120, 42), "ANDRADE SERVIÇOS DE TECNOLOGIA", fill=(255, 255, 255), font=font_title)
draw.text((120, 86), "DESIGN SYSTEM v4.1 — GUIA OFICIAL DE CORES & TOKENS VISUAIS (WCAG AAA)", fill=(45, 212, 191), font=font_subtitle)

# Divider line
draw.line([(50, 122), (width - 50, 122)], fill=(30, 35, 48), width=1)

# Color groups definition
categories = [
    {
        "title": "1. MARCA & DESTAQUES (PETROLEUM TEAL)",
        "colors": [
            {
                "name": "Verde Petróleo",
                "hex": "#2DD4BF",
                "rgb": "rgb(45, 212, 191)",
                "color": (45, 212, 191),
                "text_dark": True,
                "desc": "Cor de destaque, ícones de IA/GEO, links, WhatsApp e foco ativo."
            },
            {
                "name": "Petrol Médio",
                "hex": "#0F766E",
                "rgb": "rgb(15, 118, 110)",
                "color": (15, 118, 110),
                "text_dark": False,
                "desc": "Bordas estruturais, separadores e realces médios de cartões."
            },
            {
                "name": "Dark Petrol",
                "hex": "#044E46",
                "rgb": "rgb(4, 78, 70)",
                "color": (4, 78, 70),
                "text_dark": False,
                "desc": "Fundo sólido de badges, tags e superfícies escuras com acento."
            }
        ]
    },
    {
        "title": "2. SUPERFÍCIES & FUNDOS (MATTE OBSIDIAN)",
        "colors": [
            {
                "name": "Preto Base",
                "hex": "#090A0F",
                "rgb": "rgb(9, 10, 15)",
                "color": (9, 10, 15),
                "text_dark": False,
                "border": (45, 212, 191, 100),
                "desc": "Fundo mestre de toda a aplicação e viewport."
            },
            {
                "name": "Superfície Dark",
                "hex": "#0F1219",
                "rgb": "rgb(15, 18, 25)",
                "color": (15, 18, 25),
                "text_dark": False,
                "border": (30, 35, 48),
                "desc": "Superfície de seções, navbar e containers amplos."
            },
            {
                "name": "Card Surface",
                "hex": "#131722",
                "rgb": "rgb(19, 23, 34)",
                "color": (19, 23, 34),
                "text_dark": False,
                "border": (30, 35, 48),
                "desc": "Cartões de serviços, cases, inputs e modais."
            },
            {
                "name": "Card Hover",
                "hex": "#181D2B",
                "rgb": "rgb(24, 29, 43)",
                "color": (24, 29, 43),
                "text_dark": False,
                "border": (45, 212, 191, 100),
                "desc": "Foco/hover de cartões e botões secundários."
            }
        ]
    },
    {
        "title": "3. TIPOGRAFIA & ALTO CONTRASTE (WCAG AAA)",
        "colors": [
            {
                "name": "Branco Puro (CTA)",
                "hex": "#FFFFFF",
                "rgb": "rgb(255, 255, 255)",
                "color": (255, 255, 255),
                "text_dark": True,
                "desc": "Headlines principais (H1/H2), métricas e botão primário."
            },
            {
                "name": "Texto Primário",
                "hex": "#F8FAFC",
                "rgb": "rgb(248, 250, 252)",
                "color": (248, 250, 252),
                "text_dark": True,
                "desc": "Títulos secundários e ênfases textuais."
            },
            {
                "name": "Texto do Corpo",
                "hex": "#CBD5E1",
                "rgb": "rgb(203, 213, 225)",
                "color": (203, 213, 225),
                "text_dark": True,
                "desc": "Parágrafos, resumos e especificações técnicas."
            },
            {
                "name": "Texto Muted",
                "hex": "#94A3B8",
                "rgb": "rgb(148, 163, 184)",
                "color": (148, 163, 184),
                "text_dark": True,
                "desc": "Sublegendas, tags informativas e metadados."
            }
        ]
    },
    {
        "title": "4. CORES COMPLEMENTARES & BORDAS",
        "colors": [
            {
                "name": "Âmbar Sóbrio",
                "hex": "#F59E0B",
                "rgb": "rgb(245, 158, 11)",
                "color": (245, 158, 11),
                "text_dark": True,
                "desc": "Atenção e métricas da Era Ágil no infográfico."
            },
            {
                "name": "Terracota / Alerta",
                "hex": "#E11D48",
                "rgb": "rgb(225, 29, 72)",
                "color": (225, 29, 72),
                "text_dark": False,
                "desc": "Alertas e métricas comparativas legadas."
            },
            {
                "name": "Cinza Ardósia",
                "hex": "#64748B",
                "rgb": "rgb(100, 116, 139)",
                "color": (100, 116, 139),
                "text_dark": False,
                "desc": "Rótulos discretos, ícones neutros e divisores."
            },
            {
                "name": "Borda Subtle",
                "hex": "#1E2330",
                "rgb": "rgb(30, 35, 48)",
                "color": (30, 35, 48),
                "text_dark": False,
                "border": (45, 212, 191, 120),
                "desc": "Bordas padrão de cards e divisões sutis."
            }
        ]
    }
]

# Layout Rendering
cat_card_w = 780
cat_card_h = 410

for cat_idx, cat in enumerate(categories):
    row = cat_idx // 2
    col = cat_idx % 2
    
    cx = 50 + col * (cat_card_w + 60)
    cy = 150 + row * (cat_card_h + 30)
    
    # Category Container Box
    draw.rounded_rectangle([cx, cy, cx + cat_card_w, cy + cat_card_h], radius=14, fill=(15, 18, 25), outline=(30, 35, 48), width=1)
    
    # Category Title Header
    draw.rounded_rectangle([cx + 18, cy + 16, cx + cat_card_w - 18, cy + 50], radius=8, fill=(19, 23, 34))
    draw.text((cx + 28, cy + 23), cat["title"], fill=(45, 212, 191), font=font_cat)
    
    # Swatches inside category
    swatch_y = cy + 64
    num_items = len(cat["colors"])
    item_w = (cat_card_w - 36 - (num_items - 1) * 12) // num_items
    
    for i, c in enumerate(cat["colors"]):
        ix = cx + 18 + i * (item_w + 12)
        
        # Swatch Box Card
        draw.rounded_rectangle([ix, swatch_y, ix + item_w, swatch_y + 328], radius=10, fill=(19, 23, 34), outline=(30, 35, 48), width=1)
        
        # Color preview square
        swatch_border = c.get("border", (45, 212, 191, 70) if c["hex"] == "#090A0F" else (255, 255, 255, 30))
        draw.rounded_rectangle([ix + 10, swatch_y + 10, ix + item_w - 10, swatch_y + 120], radius=8, fill=c["color"], outline=swatch_border, width=1)
        
        # Hex on preview
        label_col = (9, 10, 15) if c.get("text_dark", False) else (255, 255, 255)
        draw.text((ix + 16, swatch_y + 92), c["hex"], fill=label_col, font=font_hex)
        
        # Name
        draw.text((ix + 12, swatch_y + 132), c["name"], fill=(255, 255, 255), font=font_name)
        
        # Hex & RGB
        draw.text((ix + 12, swatch_y + 168), f"HEX: {c['hex']}", fill=(45, 212, 191), font=font_hex)
        draw.text((ix + 12, swatch_y + 192), f"{c['rgb']}", fill=(148, 163, 184), font=font_rgb)
        
        # Divider
        draw.line([(ix + 12, swatch_y + 218), (ix + item_w - 12, swatch_y + 218)], fill=(30, 35, 48), width=1)
        
        # Description (Word wrap)
        words = c["desc"].split()
        lines = []
        cur_line = ""
        for w in words:
            if len(cur_line + " " + w) > 20:
                lines.append(cur_line)
                cur_line = w
            else:
                cur_line = (cur_line + " " + w).strip()
        if cur_line:
            lines.append(cur_line)
            
        desc_y = swatch_y + 228
        for line in lines[:4]:
            draw.text((ix + 12, desc_y), line, fill=(203, 213, 225), font=font_desc)
            desc_y += 18

# Footer
foot_text = "Andrade Serviços de Tecnologia  •  Engenharia de Software com Inteligência Artificial, GEO & SEO  •  tecnologiandrade.com.br"
draw.text(((width - draw.textbbox((0, 0), foot_text, font=font_footer)[2]) // 2, height - 35), foot_text, fill=(100, 116, 139), font=font_footer)

# Save output
os.makedirs("public/images", exist_ok=True)
out_path_public = "public/images/color-palette.png"
img.save(out_path_public, "PNG", quality=100)

artifact_dir = r"C:\Users\renan\.gemini\antigravity-ide\brain\dd5ee70a-4293-4a27-b502-46742139de4c"
os.makedirs(artifact_dir, exist_ok=True)
out_path_artifact = os.path.join(artifact_dir, "color_palette.png")
img.save(out_path_artifact, "PNG", quality=100)

print(f"Color palette cards successfully generated at {out_path_public} and {out_path_artifact}!")
