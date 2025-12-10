export function generateGraphData() {
    const groups = {
        CORE: 'Core Theoretical Concepts',
        WAVE1: 'First Wave Liberal Feminism',
        WAVE2: 'Second Wave Liberal Feminism',
        MARXIST: 'Marxist & Socialist Feminism',
        RADICAL: 'White Radical Feminism',
        BLACK_RADICAL: 'Black Radical Feminism',
        CHICANA: 'Chicana & Indigenous Feminisms',
        ECO: 'Ecofeminism',
        PSYCHO: 'Psychoanalytic Feminism',
        POST_STRUCT: 'Post-Structural Feminism',
        POST_COLONIAL: 'Post-Colonial Feminism',
        WAVE3: 'Third Wave Feminism',
        WAVE4: 'Fourth Wave / Glitch Feminism',
    };

    // 1. Define Nodes (Preserving all existing nodes)
    const rawNodes = [
        // Central Node
        { id: 'Feminism', group: groups.CORE, desc: 'Central Node: Movement to identify and resist patriarchy.' },

        // I. Core Concepts (General)
        { id: 'Patriarchy', group: groups.CORE },
        { id: 'Epistemology', group: groups.CORE },
        { id: 'The "Liberal Subject"', group: groups.CORE },
        { id: 'Binary Thinking', group: groups.CORE },
        { id: 'Separate Spheres Ideology', group: groups.CORE },
        { id: 'Intersectionality', group: groups.CORE },
        { id: 'Sexual Politics', group: groups.CORE },
        { id: 'The Unconscious', group: groups.CORE },
        { id: 'Feminist Theory', group: groups.CORE },
        { id: 'Four Elements of Theory', group: groups.CORE },

        // II. Waves (Layer 1)
        { id: 'First Wave Liberal Feminism', group: groups.WAVE1 },
        { id: 'Second Wave Liberal Feminism', group: groups.WAVE2 },
        { id: 'Marxist & Socialist Feminism', group: groups.MARXIST },
        { id: 'White Radical Feminism', group: groups.RADICAL },
        { id: 'Black Radical Feminism', group: groups.BLACK_RADICAL },
        { id: 'Chicana & Indigenous Feminisms', group: groups.CHICANA },
        { id: 'Ecofeminism', group: groups.ECO },
        { id: 'Psychoanalytic Feminism', group: groups.PSYCHO },
        { id: 'Post-Structural Feminism', group: groups.POST_STRUCT },
        { id: 'Post-Colonial Feminism', group: groups.POST_COLONIAL },
        { id: 'Third Wave Feminism', group: groups.WAVE3 },
        { id: 'Fourth Wave / Glitch Feminism', group: groups.WAVE4 },

        // III. Key Figures (Layer 2)
        { id: 'Mary Wollstonecraft', group: groups.WAVE1 },
        { id: 'Elizabeth Cady Stanton', group: groups.WAVE1 },
        { id: 'Sojourner Truth', group: groups.WAVE1 },
        { id: 'Ida B. Wells', group: groups.WAVE1 },
        { id: 'Alice Paul', group: groups.WAVE1 },
        { id: 'Charlotte Bunch', group: groups.WAVE1 },
        { id: 'Simone de Beauvoir', group: groups.WAVE2 },
        { id: 'Betty Friedan', group: groups.WAVE2 },
        { id: 'Pauli Murray', group: groups.WAVE2 },
        { id: 'Karl Marx & Friedrich Engels', group: groups.MARXIST },
        { id: 'Charlotte Perkins Gilman', group: groups.MARXIST },
        { id: 'Emma Goldman', group: groups.MARXIST },
        { id: 'Kate Millett', group: groups.RADICAL },
        { id: 'Adrienne Rich', group: groups.RADICAL },
        { id: 'Valerie Solanas', group: groups.RADICAL },
        { id: 'Kimberlé Crenshaw', group: groups.BLACK_RADICAL },
        { id: 'Audre Lorde', group: groups.BLACK_RADICAL },
        { id: 'Angela Davis', group: groups.BLACK_RADICAL },
        { id: 'bell hooks', group: groups.BLACK_RADICAL },
        { id: 'Gloria Anzaldúa', group: groups.CHICANA },
        { id: 'Haunani-Kay Trask', group: groups.CHICANA },
        { id: 'Winona LaDuke', group: groups.CHICANA },
        { id: 'Vandana Shiva', group: groups.ECO },
        { id: 'Carol Adams', group: groups.ECO },
        { id: 'Ynestra King', group: groups.ECO }, // Added back if missing or just ensuring coverage

        // IV. Concepts & Events (Layer 3 - Leaf Nodes)
        { id: 'A Vindication of the Rights of Woman', group: groups.WAVE1 },
        { id: 'A Vindication of the Rights of Men', group: groups.WAVE1 },
        { id: 'The Enlightenment', group: groups.WAVE1 },
        { id: 'Seneca Falls Convention', group: groups.WAVE1 },
        { id: 'Declaration of Sentiments', group: groups.WAVE1 },
        { id: 'Abolitionist Movement', group: groups.WAVE1 },
        { id: 'Suffrage', group: groups.WAVE1 },
        { id: 'Militant Suffrage', group: groups.WAVE1 },
        { id: 'National Woman\'s Party', group: groups.WAVE1 },
        { id: 'Rationality as the Basis for Rights', group: groups.WAVE1 },
        { id: 'The "Citizen"', group: groups.WAVE1 },

        { id: 'The Second Sex', group: groups.WAVE2 },
        { id: 'Social Construction', group: groups.WAVE2 },
        { id: 'The Feminine Mystique', group: groups.WAVE2 },
        { id: 'The "Problem That Has No Name"', group: groups.WAVE2 },
        { id: 'NOW', group: groups.WAVE2 },
        { id: 'Civil Rights Act of 1964', group: groups.WAVE2 },
        { id: 'Title IX', group: groups.WAVE2 },
        { id: 'ERA', group: groups.WAVE2 },
        { id: 'CEDAW', group: groups.WAVE2 },
        { id: 'Equality of Opportunity', group: groups.WAVE2 },

        { id: 'Class Struggle', group: groups.MARXIST },
        { id: 'Historical Materialism', group: groups.MARXIST },
        { id: 'Economic Basis of Marriage', group: groups.MARXIST },
        { id: 'Critique of Suffrage', group: groups.MARXIST },
        { id: 'Reproductive Labor', group: groups.MARXIST },
        { id: 'The Family as Economic Unit', group: groups.MARXIST },
        { id: 'Unpaid Domestic Labor', group: groups.MARXIST },
        { id: 'Triangle Shirtwaist Fire', group: groups.MARXIST },

        { id: 'Compulsory Heterosexuality', group: groups.RADICAL },
        { id: 'SCUM Manifesto', group: groups.RADICAL },
        { id: 'The Personal is Political', group: groups.RADICAL },
        { id: 'Woman-Identified Woman', group: groups.RADICAL },
        { id: 'The Myth of the Vaginal Orgasm', group: groups.RADICAL },
        { id: 'Miss America Protest', group: groups.RADICAL },
        { id: 'Lavender Menace', group: groups.RADICAL },
        { id: 'The Janes', group: groups.RADICAL },

        { id: 'Critique of the "Mythical Norm"', group: groups.BLACK_RADICAL },
        { id: 'The Master\'s Tools', group: groups.BLACK_RADICAL },
        { id: 'Prison Industrial Complex', group: groups.BLACK_RADICAL },
        { id: 'Critique of Cult of Motherhood', group: groups.BLACK_RADICAL },
        { id: 'Theory as Healing', group: groups.BLACK_RADICAL },
        { id: 'Interlocking Oppressions', group: groups.BLACK_RADICAL },
        { id: 'Misogynoir', group: groups.BLACK_RADICAL },
        { id: 'Identity Politics', group: groups.BLACK_RADICAL },
        { id: 'Combahee River Collective', group: groups.BLACK_RADICAL },

        { id: 'The New Mestiza', group: groups.CHICANA },
        { id: 'Borderlands', group: groups.CHICANA },
        { id: 'Critique of Tourism', group: groups.CHICANA },
        { id: 'Environmental Justice', group: groups.CHICANA },
        { id: 'Corporate vs. Human Rights', group: groups.CHICANA },
        { id: 'Decolonization', group: groups.CHICANA },
        { id: 'Politics of Sovereignty', group: groups.CHICANA },
        { id: 'Machismo/Marianismo', group: groups.CHICANA },
        { id: 'Global Gag Rule', group: groups.CHICANA },

        { id: 'Maldevelopment', group: groups.ECO },
        { id: 'The Feminine Principle (Prakriti)', group: groups.ECO },
        { id: 'The Sexual Politics of Meat', group: groups.ECO },
        { id: 'The Absent Referent', group: groups.ECO },
        { id: 'Logic of Domination', group: groups.ECO },
        { id: 'Nature as Resource', group: groups.ECO },
        { id: 'Interconnected Web', group: groups.ECO },
        { id: 'Homogenization', group: groups.ECO },
        { id: 'Critique of Militarism', group: groups.ECO },

        { id: 'The Construction of Gendered Subjectivity', group: groups.PSYCHO },
        { id: 'Penis Envy', group: groups.PSYCHO },
        { id: 'The Oedipus Complex', group: groups.PSYCHO },
        { id: '"Anatomy is Destiny"', group: groups.PSYCHO },

        { id: 'Social Construction of Reality via Language', group: groups.POST_STRUCT },
        { id: 'Deconstruction of the Category "Woman"', group: groups.POST_STRUCT },

        { id: 'Critique of Western Universalism', group: groups.POST_COLONIAL },
        { id: 'Politics of Home', group: groups.POST_COLONIAL },
        { id: 'Agency within Tradition', group: groups.POST_COLONIAL },

        { id: 'Rejection of Normativity', group: groups.WAVE3 },
        { id: 'Intersectionality as Default', group: groups.WAVE3 },
        { id: 'Cultural Politics', group: groups.WAVE3 },

        { id: 'Digital Existence & System Failure', group: groups.WAVE4 },
        { id: 'The Glitch', group: groups.WAVE4 },
        { id: 'Decentering Whiteness', group: groups.WAVE4 },
    ];

    // 2. Define Links (Strict Hierarchy)
    const links = [
        // --- Level 0 -> Level 1: Feminism -> Waves/Groups ---
        { source: 'Feminism', target: 'First Wave Liberal Feminism' },
        { source: 'Feminism', target: 'Second Wave Liberal Feminism' },
        { source: 'Feminism', target: 'Marxist & Socialist Feminism' },
        { source: 'Feminism', target: 'White Radical Feminism' },
        { source: 'Feminism', target: 'Black Radical Feminism' },
        { source: 'Feminism', target: 'Chicana & Indigenous Feminisms' },
        { source: 'Feminism', target: 'Ecofeminism' },
        { source: 'Feminism', target: 'Psychoanalytic Feminism' },
        { source: 'Feminism', target: 'Post-Structural Feminism' },
        { source: 'Feminism', target: 'Post-Colonial Feminism' },
        { source: 'Feminism', target: 'Third Wave Feminism' },
        { source: 'Feminism', target: 'Fourth Wave / Glitch Feminism' },
        // Also connect Core Concepts directly to Feminism as they span multiple waves
        { source: 'Feminism', target: 'Patriarchy' },
        { source: 'Feminism', target: 'Epistemology' },
        { source: 'Feminism', target: 'The "Liberal Subject"' },
        { source: 'Feminism', target: 'Binary Thinking' },
        { source: 'Feminism', target: 'Separate Spheres Ideology' },
        { source: 'Feminism', target: 'Intersectionality' },
        { source: 'Feminism', target: 'Sexual Politics' },
        { source: 'Feminism', target: 'The Unconscious' },
        { source: 'Feminism', target: 'Feminist Theory' },

        // --- Level 1 -> Level 2: Waves -> Key Figures ---
        // First Wave
        { source: 'First Wave Liberal Feminism', target: 'Mary Wollstonecraft' },
        { source: 'First Wave Liberal Feminism', target: 'Elizabeth Cady Stanton' },
        { source: 'First Wave Liberal Feminism', target: 'Sojourner Truth' },
        { source: 'First Wave Liberal Feminism', target: 'Ida B. Wells' },
        { source: 'First Wave Liberal Feminism', target: 'Alice Paul' },
        { source: 'First Wave Liberal Feminism', target: 'Charlotte Bunch' }, // As requested in previous prompt

        // Second Wave
        { source: 'Second Wave Liberal Feminism', target: 'Simone de Beauvoir' },
        { source: 'Second Wave Liberal Feminism', target: 'Betty Friedan' },
        { source: 'Second Wave Liberal Feminism', target: 'Pauli Murray' },

        // Marxist
        { source: 'Marxist & Socialist Feminism', target: 'Karl Marx & Friedrich Engels' },
        { source: 'Marxist & Socialist Feminism', target: 'Charlotte Perkins Gilman' },
        { source: 'Marxist & Socialist Feminism', target: 'Emma Goldman' },

        // Radical
        { source: 'White Radical Feminism', target: 'Kate Millett' },
        { source: 'White Radical Feminism', target: 'Adrienne Rich' },
        { source: 'White Radical Feminism', target: 'Valerie Solanas' },

        // Black Radical
        { source: 'Black Radical Feminism', target: 'Kimberlé Crenshaw' },
        { source: 'Black Radical Feminism', target: 'Audre Lorde' },
        { source: 'Black Radical Feminism', target: 'Angela Davis' },
        { source: 'Black Radical Feminism', target: 'bell hooks' },

        // Chicana/Indigenous
        { source: 'Chicana & Indigenous Feminisms', target: 'Gloria Anzaldúa' },
        { source: 'Chicana & Indigenous Feminisms', target: 'Haunani-Kay Trask' },
        { source: 'Chicana & Indigenous Feminisms', target: 'Winona LaDuke' },

        // Ecofeminism
        { source: 'Ecofeminism', target: 'Vandana Shiva' },
        { source: 'Ecofeminism', target: 'Carol Adams' },
        { source: 'Ecofeminism', target: 'Ynestra King' },

        // --- Level 2 -> Level 3: Figures -> Concepts/Events ---
        // Charlotte Bunch
        { source: 'Charlotte Bunch', target: 'Feminist Theory' },
        { source: 'Charlotte Bunch', target: 'Four Elements of Theory' },

        // Mary Wollstonecraft
        { source: 'Mary Wollstonecraft', target: 'The "Liberal Subject"' },
        { source: 'Mary Wollstonecraft', target: 'A Vindication of the Rights of Woman' },
        { source: 'Mary Wollstonecraft', target: 'A Vindication of the Rights of Men' },
        { source: 'Mary Wollstonecraft', target: 'The Enlightenment' },

        // Elizabeth Cady Stanton
        { source: 'Elizabeth Cady Stanton', target: 'Seneca Falls Convention' },
        { source: 'Elizabeth Cady Stanton', target: 'Declaration of Sentiments' },

        // Sojourner Truth
        { source: 'Sojourner Truth', target: 'Abolitionist Movement' },
        { source: 'Sojourner Truth', target: 'Intersectionality' },

        // Ida B. Wells
        { source: 'Ida B. Wells', target: 'Suffrage' },
        { source: 'Ida B. Wells', target: 'Abolitionist Movement' },
        { source: 'Ida B. Wells', target: 'Intersectionality' },

        // Alice Paul
        { source: 'Alice Paul', target: 'Militant Suffrage' },
        { source: 'Alice Paul', target: 'National Woman\'s Party' },

        // Simone de Beauvoir
        { source: 'Simone de Beauvoir', target: 'The Second Sex' },
        { source: 'Simone de Beauvoir', target: 'Social Construction' },

        // Betty Friedan
        { source: 'Betty Friedan', target: 'The Feminine Mystique' },
        { source: 'Betty Friedan', target: 'The "Problem That Has No Name"' },
        { source: 'Betty Friedan', target: 'NOW' },

        // Pauli Murray
        { source: 'Pauli Murray', target: 'NOW' },
        { source: 'Pauli Murray', target: 'Intersectionality' },
        { source: 'Pauli Murray', target: 'Civil Rights Act of 1964' },

        // Marx & Engels
        { source: 'Karl Marx & Friedrich Engels', target: 'Class Struggle' },
        { source: 'Karl Marx & Friedrich Engels', target: 'Historical Materialism' },

        // Charlotte Perkins Gilman
        { source: 'Charlotte Perkins Gilman', target: 'Economic Basis of Marriage' },
        { source: 'Charlotte Perkins Gilman', target: 'Unpaid Domestic Labor' },

        // Emma Goldman
        { source: 'Emma Goldman', target: 'Critique of Suffrage' },

        // Kate Millett
        { source: 'Kate Millett', target: 'Sexual Politics' },

        // Adrienne Rich
        { source: 'Adrienne Rich', target: 'Compulsory Heterosexuality' },

        // Valerie Solanas
        { source: 'Valerie Solanas', target: 'SCUM Manifesto' },

        // Kimberlé Crenshaw
        { source: 'Kimberlé Crenshaw', target: 'Intersectionality' },

        // Audre Lorde
        { source: 'Audre Lorde', target: 'Critique of the "Mythical Norm"' },
        { source: 'Audre Lorde', target: 'The Master\'s Tools' },

        // Angela Davis
        { source: 'Angela Davis', target: 'Prison Industrial Complex' },
        { source: 'Angela Davis', target: 'Critique of Cult of Motherhood' },

        // bell hooks
        { source: 'bell hooks', target: 'Theory as Healing' },

        // Gloria Anzaldúa
        { source: 'Gloria Anzaldúa', target: 'The New Mestiza' },
        { source: 'Gloria Anzaldúa', target: 'Borderlands' },

        // Haunani-Kay Trask
        { source: 'Haunani-Kay Trask', target: 'Critique of Tourism' },

        // Winona LaDuke
        { source: 'Winona LaDuke', target: 'Environmental Justice' },
        { source: 'Winona LaDuke', target: 'Corporate vs. Human Rights' },

        // Vandana Shiva
        { source: 'Vandana Shiva', target: 'Maldevelopment' },
        { source: 'Vandana Shiva', target: 'The Feminine Principle (Prakriti)' },

        // Carol Adams
        { source: 'Carol Adams', target: 'The Sexual Politics of Meat' },
        { source: 'Carol Adams', target: 'The Absent Referent' },

        // --- Orphan Concepts (Level 1 -> Level 3) ---
        // Concepts that don't have a specific figure listed above but belong to a wave
        { source: 'First Wave Liberal Feminism', target: 'Rationality as the Basis for Rights' },
        { source: 'First Wave Liberal Feminism', target: 'The "Citizen"' },
        { source: 'First Wave Liberal Feminism', target: 'Separate Spheres Ideology' },

        { source: 'Second Wave Liberal Feminism', target: 'Equality of Opportunity' },
        { source: 'Second Wave Liberal Feminism', target: 'Title IX' },
        { source: 'Second Wave Liberal Feminism', target: 'ERA' },
        { source: 'Second Wave Liberal Feminism', target: 'CEDAW' },

        { source: 'Marxist & Socialist Feminism', target: 'Reproductive Labor' },
        { source: 'Marxist & Socialist Feminism', target: 'The Family as Economic Unit' },
        { source: 'Marxist & Socialist Feminism', target: 'Triangle Shirtwaist Fire' },

        { source: 'White Radical Feminism', target: 'The Personal is Political' },
        { source: 'White Radical Feminism', target: 'Woman-Identified Woman' },
        { source: 'White Radical Feminism', target: 'The Myth of the Vaginal Orgasm' },
        { source: 'White Radical Feminism', target: 'Miss America Protest' },
        { source: 'White Radical Feminism', target: 'Lavender Menace' },
        { source: 'White Radical Feminism', target: 'The Janes' },

        { source: 'Black Radical Feminism', target: 'Interlocking Oppressions' },
        { source: 'Black Radical Feminism', target: 'Misogynoir' },
        { source: 'Black Radical Feminism', target: 'Identity Politics' },
        { source: 'Black Radical Feminism', target: 'Combahee River Collective' },

        { source: 'Chicana & Indigenous Feminisms', target: 'Decolonization' },
        { source: 'Chicana & Indigenous Feminisms', target: 'Politics of Sovereignty' },
        { source: 'Chicana & Indigenous Feminisms', target: 'Machismo/Marianismo' },
        { source: 'Chicana & Indigenous Feminisms', target: 'Global Gag Rule' },

        { source: 'Ecofeminism', target: 'Logic of Domination' },
        { source: 'Ecofeminism', target: 'Nature as Resource' },
        { source: 'Ecofeminism', target: 'Interconnected Web' },
        { source: 'Ecofeminism', target: 'Homogenization' },
        { source: 'Ecofeminism', target: 'Critique of Militarism' },

        { source: 'Psychoanalytic Feminism', target: 'The Construction of Gendered Subjectivity' },
        { source: 'Psychoanalytic Feminism', target: 'Penis Envy' },
        { source: 'Psychoanalytic Feminism', target: 'The Oedipus Complex' },
        { source: 'Psychoanalytic Feminism', target: '"Anatomy is Destiny"' },
        { source: 'Psychoanalytic Feminism', target: 'The Unconscious' },

        { source: 'Post-Structural Feminism', target: 'Social Construction of Reality via Language' },
        { source: 'Post-Structural Feminism', target: 'Deconstruction of the Category "Woman"' },
        { source: 'Post-Structural Feminism', target: 'Epistemology' },
        { source: 'Post-Structural Feminism', target: 'Binary Thinking' },

        { source: 'Post-Colonial Feminism', target: 'Critique of Western Universalism' },
        { source: 'Post-Colonial Feminism', target: 'Politics of Home' },
        { source: 'Post-Colonial Feminism', target: 'Agency within Tradition' },

        { source: 'Third Wave Feminism', target: 'Rejection of Normativity' },
        { source: 'Third Wave Feminism', target: 'Intersectionality as Default' },
        { source: 'Third Wave Feminism', target: 'Cultural Politics' },

        { source: 'Fourth Wave / Glitch Feminism', target: 'Digital Existence & System Failure' },
        { source: 'Fourth Wave / Glitch Feminism', target: 'The Glitch' },
        { source: 'Fourth Wave / Glitch Feminism', target: 'Decentering Whiteness' },
    ];

    // 3. Dynamic Sizing Logic
    const outgoingCount = {};
    links.forEach(link => {
        outgoingCount[link.source] = (outgoingCount[link.source] || 0) + 1;
    });

    const nodes = rawNodes.map(node => {
        let size = 3; // Base size
        if (node.id === 'Feminism') {
            size = 25; // Central node is largest
        } else {
            const connections = outgoingCount[node.id] || 0;
            size += connections * 1.5;
        }

        return {
            ...node,
            val: size
        };
    });

    return { nodes, links };
}
