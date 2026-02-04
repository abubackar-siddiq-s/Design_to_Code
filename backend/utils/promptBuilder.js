/**
 * Build prompt for UI to Code conversion
 * @param {string} outputType - Type of output format
 * @returns {string} Formatted prompt
 */
function buildPrompt(outputType) {
    const base = (
        "Analyze the given UI screenshot with extreme precision and engineering-level attention to detail.\n" +
        "Step 1: Identify the exact layout hierarchy and structure (header, sidebar, main content, footer, sections).\n" +
        "Step 2: Measure and preserve the relative size, width, height, spacing, alignment, and proportions of all UI elements.\n" +
        "Step 3: Identify all UI components precisely (buttons, inputs, forms, cards, navbars, modals, lists).\n" +
        "Step 4: Infer and preserve the exact visual hierarchy, grouping, padding, margins, and layout behavior.\n" +
        "Step 5: Recreate the UI so that it visually matches the screenshot as closely as possible.\n" +
        "Use semantic HTML elements and meaningful, professional class names.\n" +
        "Use the SAME colors, gradients, borders, shadows, and background styles as seen in the image.\n" +
        "Preserve layout dimensions and proportions even if the design is complex.\n" +
        "Do NOT simplify the layout or redesign the UI.\n" +
        "Do NOT improve or modify the design.\n" +
        "Recreate it exactly as shown.\n\n" +
        "IMPORTANT RULES:\n" +
        "- Do NOT extract or reproduce any text content from the image.\n" +
        "- Replace all visible text with neutral placeholders (e.g., \"Text\", \"Label\", \"Button\").\n" +
        "- If a logo or image is present, DO NOT recreate it.\n" +
        "- Instead, insert a dummy image placeholder using a generic image URL (e.g., https://via.placeholder.com).\n" +
        "- Maintain the exact space, size, and position of logos and images.\n" +
        "- Avoid unnecessary wrappers, redundant elements, or bloated code.\n\n"
    );

    if (outputType === "HTML + Internal CSS") {
        return base + (
            "Output requirements:\n" +
            "- Produce a single, complete HTML file.\n" +
            "- Include all CSS inside a <style> tag within the HTML.\n" +
            "- Use modern CSS techniques (flexbox and grid where appropriate).\n" +
            "- Match the layout dimensions and proportions as closely as possible.\n" +
            "- Ensure the UI visually mirrors the screenshot in structure and scale.\n" +
            "- Follow clean indentation and professional formatting.\n" +
            "- Output ONLY valid, production-ready HTML.\n"
        );
    }

    if (outputType === "HTML + CSS (Separate Files)") {
        return base + (
            "Output requirements:\n" +
            "- Produce TWO clearly separated code blocks.\n" +
            "- First code block: index.html (HTML structure only).\n" +
            "- Second code block: styles.css (all styling rules).\n" +
            "- Correctly link the CSS file in the HTML.\n" +
            "- Use modern CSS (flexbox/grid) with reusable class names.\n" +
            "- Preserve exact layout spacing, alignment, and proportions.\n" +
            "- Output ONLY code, no explanations.\n"
        );
    }

    if (outputType === "React (JSX + CSS)") {
        return base + (
            "Output requirements:\n" +
            "- Produce TWO clearly separated code blocks.\n" +
            "- First code block: a React functional component written in JSX.\n" +
            "- Second code block: a corresponding CSS file.\n" +
            "- Use clean, semantic, and reusable class names.\n" +
            "- Do NOT use external UI libraries or frameworks.\n" +
            "- Preserve exact layout structure, spacing, and proportions.\n" +
            "- Output ONLY valid, production-ready code.\n"
        );
    }

    return base;
}

/**
 * Build prompt for Wireframe/Sketch to Code conversion
 * @param {string} outputType - Type of output format
 * @returns {string} Formatted prompt
 */
function buildWireframePrompt(outputType) {
    const base = (
        "Analyze the given hand-drawn sketch or low-fidelity wireframe image.\n" +
        "This is a STRUCTURAL interpretation task, NOT a visual recreation task.\n\n" +
        "CRITICAL BEHAVIOR:\n" +
        "- Treat this as a LOW-FIDELITY input (sketch, wireframe, rough drawing).\n" +
        "- Focus ONLY on layout, structure, and component intent.\n" +
        "- DO NOT attempt pixel-perfect visual recreation.\n" +
        "- DO NOT extract colors, fonts, branding, or styling details.\n\n" +
        "INTERPRETATION RULES:\n" +
        "- Boxes and rectangles represent containers, sections, or content areas.\n" +
        "- Lines represent dividers, borders, or separators.\n" +
        "- Circles or rounded shapes represent buttons, icons, or interactive elements.\n" +
        "- Text scribbles are placeholders only - do not extract actual text.\n" +
        "- Infer layout hierarchy (header, sidebar, main content, footer) from spatial relationships.\n" +
        "- Identify component types based on shape and position (buttons, inputs, cards, navigation).\n\n" +
        "OUTPUT REQUIREMENTS:\n" +
        "- Use placeholder text only (e.g., \"Title\", \"Button\", \"Input\", \"Content Area\").\n" +
        "- Use neutral, wireframe-style CSS (grayscale colors, borders, dashed outlines where appropriate).\n" +
        "- Avoid branding, colors, fonts, or visual polish.\n" +
        "- Represent layout and hierarchy clearly with proper spacing and structure.\n" +
        "- Use semantic HTML elements and meaningful, professional class names.\n" +
        "- Ensure the code is clean, readable, and production-ready.\n" +
        "- Do NOT extract or reproduce any text content from the image.\n" +
        "- If images/logos are indicated, use placeholder elements.\n\n"
    );

    if (outputType === "HTML + Internal CSS") {
        return base + (
            "Output requirements:\n" +
            "- Produce a single, complete HTML file.\n" +
            "- Include all CSS inside a <style> tag within the HTML.\n" +
            "- Use modern CSS techniques (flexbox and grid where appropriate).\n" +
            "- Use wireframe-style styling: grayscale colors, borders, minimal shadows.\n" +
            "- Focus on structure and layout, not visual polish.\n" +
            "- Follow clean indentation and professional formatting.\n" +
            "- Output ONLY valid, production-ready HTML.\n"
        );
    }

    if (outputType === "HTML + CSS (Separate Files)") {
        return base + (
            "Output requirements:\n" +
            "- Produce TWO clearly separated code blocks.\n" +
            "- First code block: index.html (HTML structure only).\n" +
            "- Second code block: styles.css (all styling rules).\n" +
            "- Correctly link the CSS file in the HTML.\n" +
            "- Use modern CSS (flexbox/grid) with reusable class names.\n" +
            "- Use wireframe-style styling: grayscale colors, borders, minimal shadows.\n" +
            "- Focus on structure and layout, not visual polish.\n" +
            "- Output ONLY code, no explanations.\n"
        );
    }

    if (outputType === "React (JSX + CSS)") {
        return base + (
            "Output requirements:\n" +
            "- Produce TWO clearly separated code blocks.\n" +
            "- First code block: a React functional component written in JSX.\n" +
            "- Second code block: a corresponding CSS file.\n" +
            "- Use clean, semantic, and reusable class names.\n" +
            "- Do NOT use external UI libraries or frameworks.\n" +
            "- Use wireframe-style styling: grayscale colors, borders, minimal shadows.\n" +
            "- Focus on structure and layout, not visual polish.\n" +
            "- Output ONLY valid, production-ready code.\n"
        );
    }

    return base;
}

/**
 * Get font detection prompt
 * @returns {string} Font detection prompt
 */
function getFontPrompt() {
    return (
        "You are a typography expert.\n\n" +
        "Given this UI/text screenshot, guess the exact font family.\n\n" +
        "Output format requirements:\n" +
        "- Output ONLY one line of valid CSS.\n" +
        "- The line must look like this pattern exactly:\n" +
        "  font-family: \"Font Name\";\n\n" +
        "Rules:\n" +
        "- Use common web fonts or Google Fonts if unsure (e.g., Inter, Roboto, Poppins, Helvetica, Arial, Georgia, 'Times New Roman').\n" +
        "- Do NOT add comments, explanations, or extra text.\n" +
        "- Do NOT add backticks or code fences.\n"
    );
}

module.exports = {
    buildPrompt,
    buildWireframePrompt,
    getFontPrompt
};

