/* Text that is used in the graphs. The parameter bagName changes the name of the bag in the text. */

/* The swedish translation of the text. */

export const SV_text = (bagName) => {
  return {
    titleNew: "Nytt läder",
    titleRecycled: "Återanvänt läder",
    titleFootprint: "Det verkliga koldioxidavtrycket bakom våra produkter",
    titleTransparency: "Transparent Prissättning",
    description: (
      <text>
        Modeindustrin rankas som en av de främsta förorenarna på planeten.
        Orsaken är dess höga koldioxidutsläpp och överproduktion. Detta har i
        sin tur allvarliga effekter på biologisk mångfald och
        klimatförändringar. Vi kommer aldrig att sluta konsumera, men vi kan
        lära oss att göra bättre val när vi gör det.
        <br />
        <br /> Att göra bättre val kräver information. Det är därför vi vill
        vara transparenta och dela våra beräknade utsläppssiffror för varje steg
        i värdekedjan för de väskor och tillbehör i vår kollektion som skapar
        utsläpp, såsom läder, foder, hårdvara, produktion, logistik, förpackning
        och återvinning. Vi använder dessa siffror som ett verktyg för ständig
        förbättring när vi utvecklar vår kollektion.
        <br />
        <br /> Nedan presenterar vi en jämförelse mellan det faktiska utsläppet
        av vår {bagName} för varje steg i värdekedjan med återanvänt läder och
        det totala utsläppet som väskan skulle ha om den skapades med ny kohud.
      </text>
    ),
    priceTransparency: (
      <text>
        By Cloudberry är ett så kallat Direct-to-consumer varumärke (D2C) som
        har valt att kapa alla mellanhänder för att sälja direkt till konsument.
        Tack vare denna affärsmodell kan vi erbjuda våra kunder en extremt hög
        kvalité i förhållande till priset.
        <br />
        <br /> Förutom de direkta kostnaderna för att producera produkterna
        (COGS), täcks våra driftskostnader som design, kundservice,
        marknadsföring etc. genom ett påslag. För ett typiskt D2C-varumärke som
        By Cloudberry ligger en vanlig påslagsfaktor mellan 2-3 gånger.
        <br />
        <br /> För varumärken som säljer sina produkter genom återförsäljare
        kommer slutpriset på produkterna att öka med en extra påslagsfaktor på
        2,5. Nedan illustrerar vi vad {bagName} skulle kosta om vi skulle
        använda detaljhandelspriser och sälja via återförsäljare (vilket vi inte
        gör), som tenderar att vara 5-6 gånger tillverkningskostnaden.
      </text>
    ),
  };
};

/* The english translation of the text. */

export const EN_text = (bagName) => {
  return {
    titleNew: "New Leather",
    titleRecycled: "Upcycled Leather",
    titleFootprint: "The real carbon footprint numbers behind our products",
    titleTransparency: "Transparency Pricing",
    description: (
      <text>
        The fashion industry ranks as one of the top polluters on the planet.
        The reason is due to its high carbon emissions and overproduction. This,
        in turn, has serious effects on biodiversity and climate change. We will
        never stop consuming, but we can learn to make better choices when we
        do.
        <br />
        <br /> Making better choices requires information. This is why we want
        to be transparent and share our calculated emission numbers for every
        step in the value chain for the bags and accessories in our collection
        that create emissions, such as Leather, Lining, Hardware, Production,
        Logistics, Packaging, and Recycling. We use these numbers as a tool for
        constant improvement when developing our collection.
        <br />
        <br /> Below, we present a comparison between the actual emission of our{" "}
        {bagName} for each step in the value chain using upcycled leather vs the
        total emission the bag would have if it were created with new cowhide.
      </text>
    ),
    priceTransparency: (
      <text>
        By Cloudberry is a so-called Direct-to-consumer brand (D2C) that cuts
        the middleman and sells directly to the consumers. Thanks to this
        business model, we can offer our customers an extremely high value-price
        ratio.
        <br />
        <br /> Aside from the direct costs associated to produce the products
        (COGS), operational costs like design, customer service, marketing, etc.
        are covered through a markup. For a typical D2C brand like By
        Cloudberry, a common markup factor is between 2 – 3 times.
        <br />
        <br /> For brands that have chosen to sell their products through
        retailers will see the price of their products increase with an
        additional factor of 2,5 to the final price. Below illustrates what{" "}
        {bagName} would cost if we would use retail prices and sell through
        resellers (which we don´t), which tend to be 5-6 times the manufacturing
        cost.
      </text>
    ),
  };
};

/* The swedish translation of the categories for the graphs datapoints. */

export const SV_categories = [
  "Läder",
  "Produktion",
  "Logistik",
  "Återvinning",
  "Foder",
  "Förpackning",
  "Detaljer",
];
