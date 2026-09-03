# Manual de Identidade Visual & Design System Técnico
**Empresa:** Andrade Serviços de Tecnologia  
**Versão:** 4.1 (Edição Sóbria, High-Contrast & Hierarquia Petroleum Teal - WCAG AAA 11.2:1)  
**Última Atualização:** Setembro de 2026  

---

## 1. Diretrizes Inegociáveis de Design (Regras de Ouro)

1. **HIERARQUIA OFICIAL DE VERDE PETRÓLEO (WCAG AAA 11.2:1):**
   * **Textos, Headlines & Ícones:** Utilizam **Verde Petróleo Luminoso (`#2DD4BF`)**, garantindo taxa de contraste de **11.2:1** sobre o fundo escuro (`#090A0F`), superando com folga o padrão máximo do Google Lighthouse / WCAG AAA.
   * **Bordas Estruturais & Separadores:** Utilizam **Verde Petróleo Médio (`#0F766E`)**.
   * **Superfícies & Fundos de Badges:** Utilizam **Dark Petrol Profundo (`#044E46`)** com transparência sutil (`rgba(4, 78, 70, 0.35)`).

2. **PROIBIDO USO DE NEON E GLOW:**
   * Nunca utilizar sombras brilhantes coloridas (`box-shadow: 0 0 25px rgba(...)`), orbs difusos no fundo ou bordas pulsantes neon.
   * O acabamento deve ser **matte escuro sofisticado** (padrão Apple, Leica, Linear Dark Mode).

3. **PROIBIDO USO DE GRADIENTES EM TEXTOS OU FUNDOS:**
   * Títulos e headlines devem ser estritamente em **branco sólido (`#FFFFFF`)** ou **Petroleum Teal sólido (`#2DD4BF`)**.
   * Sem arco-íris, sem transições de duas ou mais cores em tipografia.

4. **CONFORMIDADE WCAG 2.1 AAA (GOOGLE LIGHTHOUSE 100/100):**
   * Toda combinação de texto e fundo deve cumprir ou exceder o nível **AAA** (contraste mínimo de 7.0:1 para texto normal e 4.5:1 para texto grande/bold).

5. **ESCOPO DO NEGÓCIO:**
   * **Foco:** Engenharia de software sob medida com IA, aceleração de Time-to-Market, Otimização GEO (ChatGPT/Perplexity) e SEO (Google), segurança OWASP e conformidade estrita com a LGPD.
   * **Exclusão Estrita:** A empresa **NÃO** trabalha com infraestrutura física ou serviços de computação em nuvem / migração de servidores.

---

## 2. Paleta de Cores Oficial & Códigos Hex

### 2.1 Superfícies & Fundos (Matte Obsidian)

| Nome do Token | Código Hex | RGB | Utilização |
| :--- | :--- | :--- | :--- |
| `--bg-dark-base` | `#090A0F` | `rgb(9, 10, 15)` | Fundo geral da página e base da aplicação |
| `--bg-dark-surface` | `#0F1219` | `rgb(15, 18, 25)` | Superfície de cartões estruturais e seções |
| `--bg-dark-card` | `#131722` | `rgb(19, 23, 34)` | Cartões internos, inputs de formulário e dropdowns |
| `--bg-dark-card-hover` | `#181D2B` | `rgb(24, 29, 43)` | Estado de foco/hover em cartões e containers |

### 2.2 Tipografia & Textos (Alto Contraste WCAG AAA)

| Nome do Token | Código Hex | Taxa de Contraste vs `#090A0F` | Utilização |
| :--- | :--- | :--- | :--- |
| `--text-white` | `#FFFFFF` | **18.4 : 1 (AAA Máximo)** | Títulos (H1, H2, H3), métricas principais e botões primários |
| `--text-main` | `#F8FAFC` | **17.8 : 1 (AAA)** | Textos de alto destaque e cabeçalhos de tabela |
| `--text-body` | `#CBD5E1` | **12.8 : 1 (AAA)** | Parágrafos principais, resumos de serviços e descrições |
| `--text-muted` | `#94A3B8` | **7.6 : 1 (AAA)** | Sublegendas, metadados e textos secundários |
| `--text-dim` | `#64748B` | **4.6 : 1 (AA)** | Divisores, legendas de eixo e rótulos desabilitados |

### 2.3 Cores de Acento & Semânticas (Petroleum Teal System)

| Função | Código Hex | Taxa vs `#090A0F` | Utilização |
| :--- | :--- | :--- | :--- |
| **Petroleum Teal / Brand** | `#2DD4BF` | **11.2 : 1 (AAA)** | Destaques pontuais em títulos, ícones de IA, GEO, segurança, WhatsApp e links |
| **Petrol Médio / Estrutura**| `#0F766E` | **4.8 : 1 (AA)** | Bordas superiores de cartões, divisores e tags secundárias |
| **Dark Petrol / Fundo** | `#044E46` | — | Fundo sólido de badges com transparência (`rgba(4, 78, 70, 0.35)`) |
| **Cinza Ardósia / Deploy**| `#64748B` | **4.6 : 1 (AA)** | Barra de implantação/testes no infográfico e rótulos secundários |
| **Terracota / Alerta** | `#E11D48` | **4.9 : 1 (AA)** | Barra da Era Pré-Digital e métricas de atraso tradicional |
| **Fundo Terracota Mate**| `#27191F` | — | Fundo sólido de badges da Era Pré-Digital |
| **Âmbar Sóbrio** | `#F59E0B` | **9.1 : 1 (AAA)** | Badges de atenção e Era Ágil |

### 2.4 Bordas & Hairlines

| Nome do Token | Valor | Utilização |
| :--- | :--- | :--- |
| `--border-hairline` | `rgba(255, 255, 255, 0.08)` ou `#1E2330` | Bordas padrão de cartões, inputs e separadores |
| `--border-hairline-hover` | `rgba(45, 212, 191, 0.35)` | Estado hover em cartões e botões secundários |
| `--border-subtle` | `#1E2330` | Divisores de layout internos |

---

## 3. Tipografia & Escala Visual

* **Primária (Títulos e Textos):** `'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
* **Secundária (Código, Métricas e Dados):** `'JetBrains Mono', monospace`

---

## 4. Padrões de Componentes UI

### 4.1 Botões (Tactile Solid Buttons)
* **Botão Primário (CTA Principal):**
  * Fundo: `#FFFFFF` sólido
  * Texto: `#090A0F` sólido (Peso 700)
  * Hover: `#E4E4E7`
* **Botão Secundário:**
  * Fundo: `#181D2B`
  * Texto: `#F4F4F5`
  * Borda: `1px solid rgba(255, 255, 255, 0.08)`
  * Hover: `#232A3D` com borda `rgba(45, 212, 191, 0.35)`

### 4.2 Ícones de Validação, Segurança & WhatsApp
* **Checkmarks & Validações:** `#2DD4BF` ou `#FFFFFF`
* **WhatsApp Icon:** `#2DD4BF` ou `#090A0F` (quando em botão branco)
* **Segurança / LGPD Icon:** `#2DD4BF` ou `#FFFFFF`
