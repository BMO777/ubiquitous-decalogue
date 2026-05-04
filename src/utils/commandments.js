// src/utils/commandments.js
export const commandments = [
  {
    id: 1,
    text: "Thou shalt have no other gods before Me",
    keyPoints:
      "Exclusive worship of God, avoiding anything that takes precedence over God in our affections or service",
    analyze(inputText) {
      const lowerInput = inputText.toLowerCase();
      const keywords = [
        "money",
        "wealth",
        "career",
        "success",
        "idol",
        "priority",
        "obsession",
        "devotion",
        "focus",
        "ambition",
        "status",
        "fame",
        "self-reliance",
        "independence",
        "autonomy",
        "ego",
        "self-sufficiency",
        "humanism",
        "pride",
        "control",
      ];
      const violated = keywords.some((word) => lowerInput.includes(word));
      return {
        violated,
        explanation: violated
          ? "The underlying priority appears to place temporal concerns above divine priorities, violating the principle of exclusive devotion to God."
          : "The heart posture demonstrates proper prioritization of God above all earthly concerns.",
        biblicalReasoning:
          "Exodus 20:3 - 'Thou shalt have no other gods before me.' God alone is entitled to supreme reverence and worship. Anything we cherish that lessens our love for God becomes an idol.",
        guidance:
          "Cultivate daily practices that honor God as supreme, such as prayer, Scripture study, and acts of service that reflect His priorities. Remember, true change begins with renewing your mind (Romans 12:2) - redirect your attention and thoughts toward God before expecting changes in actions.",
      };
    },
  },
  {
    id: 2,
    text: "Thou shalt not make unto thee any graven image",
    keyPoints:
      "No worship of God through images or similitudes, avoiding anything that lowers our conception of God",
    analyze(inputText) {
      const lowerInput = inputText.toLowerCase();
      const keywords = [
        "image",
        "statue",
        "worship",
        "idol",
        "representation",
        "physical",
        "material",
        "substitute",
        "shrine",
        "icon",
        "visual",
        "tangible",
        "object",
        "artifact",
        "symbol",
        "relic",
        "talisman",
        "superstition",
      ];
      const violated = keywords.some((word) => lowerInput.includes(word));
      return {
        violated,
        explanation: violated
          ? "The internal conception of God may be diminished by relying on physical representations, leading to a limited understanding of His infinite nature."
          : "The heart posture respects the prohibition against representing the infinite God through finite means.",
        biblicalReasoning:
          "Exodus 20:4-5 - 'Thou shalt not make unto thee any graven image.' Attempting to represent the Eternal One by material objects would lower man's conception of God.",
        guidance:
          "Focus worship on the invisible, incomparable nature of God through spirit and truth, as revealed in Scripture. Transformation begins with renewing your mind to understand God's true nature - this upstream change will naturally lead to appropriate downstream worship practices.",
      };
    },
  },
  {
    id: 3,
    text: "Thou shalt not take the name of the Lord thy God in vain",
    keyPoints:
      "Respectful and reverent use of God's name, avoiding careless or trivial mention",
    analyze(inputText) {
      const lowerInput = inputText.toLowerCase();
      const godNames = [
        "god",
        "lord",
        "jesus",
        "christ",
        "holy spirit",
        "almighty",
        "yahweh",
        "jehovah",
      ];
      const irreverentWords = [
        "curse",
        "swear",
        "swore",
        "sworn",
        "casual",
        "damn",
        "hell",
        "disrespect",
        "profanity",
        "blasphemy",
        "irreverence",
        "trivial",
        "joke",
        "slang",
        "flippant",
        "careless",
        "thoughtless",
        "mockery",
        "insult",
      ];

      const mentionsGod = godNames.some((name) => lowerInput.includes(name));
      const isIrreverent = irreverentWords.some((word) =>
        lowerInput.includes(word),
      );

      const violated = mentionsGod && isIrreverent;
      return {
        violated,
        explanation: violated
          ? "The internal attitude toward God's name lacks the necessary reverence, treating His holy character as common or trivial."
          : "The heart posture demonstrates appropriate reverence for the holiness of God's name.",
        biblicalReasoning:
          "Exodus 20:7 - 'Thou shalt not take the name of the Lord thy God in vain.' The thoughtless mention of God in common conversation dishonors Him.",
        guidance:
          "Cultivate reverence for God's name through mindful speech and meditation on His majestic character as revealed in Scripture. Remember that lasting change in speech patterns begins with transforming your thoughts and attention toward God's holiness.",
      };
    },
  },
  {
    id: 4,
    text: "Remember the Sabbath day, to keep it holy",
    keyPoints:
      "Observing the seventh day (Friday evening through Saturday evening) as a memorial of creation, following God's example at creation, avoiding all work and worldly concerns except for acts of necessity and mercy",
    analyze(inputText) {
      const lowerInput = inputText.toLowerCase();
      const timeKeywords = [
        "friday night",
        "friday evening",
        "friday sundown",
        "saturday morning",
        "saturday",
        "sabbath",
        "seventh day",
        "weekend",
        "holy day",
        "rest day",
      ];
      const workKeywords = [
        "work",
        "business",
        "shopping",
        "shop",
        "plans",
        "plan",
        "transaction",
        "deal",
        "dealt",
        "meeting",
        "project",
        "worldly",
        "secular",
        "material",
        "money",
        "career",
        "job",
        "office",
        "labor",
        "productivity",
        "striving",
        "busy",
        "hurry",
        "exhaustion",
        "burnout",
        "overwhelmed",
        "stress",
        "anxiety",
      ];
      const mercyKeywords = [
        "necessity",
        "mercy",
        "sick",
        "suffering",
        "emergency",
        "help",
        "heal",
        "food",
        "eat",
        "ate",
        "eaten",
        "hunger",
        "worship",
        "service",
        "pray",
        "bible",
        "scripture",
        "good",
        "righteous",
        "kind",
        "compassion",
        "charity",
        "ministry",
        "fellowship",
      ];

      const mentionsTime = timeKeywords.some((word) =>
        lowerInput.includes(word),
      );
      const mentionsWork = workKeywords.some((word) =>
        lowerInput.includes(word),
      );
      const mentionsMercy = mercyKeywords.some((word) =>
        lowerInput.includes(word),
      );

      const violated = mentionsTime && mentionsWork && !mentionsMercy;
      return {
        violated,
        explanation: violated
          ? "The internal focus remains on work or worldly concerns during the Sabbath, failing to honor it as a sacred memorial of creation."
          : "The heart posture aligns with principles of Sabbath observance and restful worship.",
        biblicalReasoning:
          "Exodus 20:8-11 - 'Remember the Sabbath day, to keep it holy.' The seventh day includes Friday evening through Saturday evening. Those who discuss business matters or lay plans on the Sabbath are regarded by God as though engaged in the actual transaction of business. To keep the Sabbath holy, we should not even allow our minds to dwell upon things of a worldly character. However, acts of necessity and mercy are permitted. Christ Himself did good works on the Sabbath, including healing the sick and even plucking grain for immediate consumption (Matthew 12:1-8), demonstrating that it is lawful to do good on the Sabbath. For in six days the Lord made heaven and earth, the sea, and all that in them is, and rested the seventh day: wherefore the Lord blessed the Sabbath day, and hallowed it.",
        guidance:
          "Set aside Friday evening through Saturday evening entirely for worship, rest, and reflection on God's creative and redemptive works. Avoid all work and worldly concerns except for acts of necessity and mercy. The commandment includes all within our gates - all household members should unite to honor God by willing service upon His holy day. Remember that the sick and suffering are to be cared for at all times, even on the Sabbath. Following Christ's example, acts of compassion, mercy, and meeting immediate needs (like eating when hungry) do not violate the Sabbath but honor its true purpose.",
      };
    },
  },
  {
    id: 5,
    text: "Honor thy father and thy mother",
    keyPoints:
      "Respecting and caring for parents, extending to all delegated authority",
    analyze(inputText) {
      const lowerInput = inputText.toLowerCase();
      const keywords = [
        "parent",
        "father",
        "mother",
        "disrespect",
        "ignore",
        "authority",
        "elders",
        "respect",
        "honor",
        "disobey",
        "rebel",
        "defiance",
        "contempt",
        "neglect",
        "ingratitude",
        "resentment",
        "bitterness",
      ];
      const violated = keywords.some((word) => lowerInput.includes(word));
      return {
        violated,
        explanation: violated
          ? "The heart posture involves disrespect or neglect toward parental authority, failing to honor the divine order of respect."
          : "The internal orientation demonstrates proper respect for parental and delegated authority.",
        biblicalReasoning:
          "Exodus 20:12 - 'Honor thy father and thy mother.' Parents stand in God's place during early years, and rejecting their authority rejects God's authority.",
        guidance:
          "Show respect, love, and care for parents through actions and attitudes that reflect honor and gratitude for their role. Lasting change in relationships begins with transforming your heart attitude - address upstream issues of resentment or bitterness before expecting downstream changes in behavior.",
      };
    },
  },
  {
    id: 6,
    text: "Thou shalt not kill",
    keyPoints:
      "Preserving life, avoiding hatred, revenge, and actions that harm others physically or emotionally",
    analyze(inputText) {
      const lowerInput = inputText.toLowerCase();
      const keywords = [
        "kill",
        "murder",
        "harm",
        "hatred",
        "anger",
        "abuse",
        "rage",
        "violence",
        "injury",
        "malice",
        "revenge",
        "assault",
        "threat",
        "hostility",
        "enmity",
        "grudge",
        "unforgiveness",
        "cruelty",
        "bullying",
        "slander",
      ];
      const violated = keywords.some((word) => lowerInput.includes(word));
      return {
        violated,
        explanation: violated
          ? "The internal state harbors hatred, anger, or a disregard for the sanctity of life, which is equivalent to murder in God's sight."
          : "The heart posture preserves and respects the sanctity of human life created in God's image.",
        biblicalReasoning:
          "Exodus 20:13 - 'Thou shalt not kill.' The spirit of hatred and revenge, along with any passion leading to harm, violates this commandment.",
        guidance:
          "Cultivate love for others as yourself, actively seeking their welfare and avoiding all forms of harm, both physical and emotional. Remember, transformation begins with addressing upstream issues of anger, bitterness, and unforgiveness before expecting downstream changes in actions.",
      };
    },
  },
  {
    id: 7,
    text: "Thou shalt not commit adultery",
    keyPoints:
      "Maintaining purity in thoughts, desires, and actions regarding marriage relationships. This commandment forbids not only acts of impurity, but sensual thoughts and desires, or any practice that tends to excite them. Also anything that is fatal to the sacredness and peace of the family relation.",
    analyze(inputText) {
      const lowerInput = inputText.toLowerCase();
      const keywords = [
        "adultery",
        "lust",
        "divorce",
        "unfaithful",
        "sensual",
        "impure",
        "porn",
        "fornication",
        "incest",
        "prostitution",
        "seduce",
        "seduction",
        "harlot",
        "whore",
        "immoral",
        "lewd",
        "indecent",
        "family discord",
        "family conflict",
        "marital strife",
        "neglect family",
        "abandon family",
        "purity",
        "desire",
        "fidelity",
        "marriage",
        "infidelity",
        "betrayal",
        "fantasy",
        "impropriety",
        "flirtation",
        "unholy",
        "defilement",
      ];
      const violated = keywords.some((word) => lowerInput.includes(word));
      return {
        violated,
        explanation: violated
          ? "The internal desire involves impurity or a lack of commitment to the sacredness of marriage and family relationships."
          : "The heart posture maintains purity in relationships according to God's design for marriage and family.",
        biblicalReasoning:
          "Exodus 20:14 - 'Thou shalt not commit adultery.' Christ taught that evil thoughts and looks are as truly sin as unlawful deeds.",
        guidance:
          "Guard the heart and mind through purity in media consumption, relationships, and personal conduct that honors marriage covenant. True purity begins with upstream transformation of thoughts and desires - guard your heart (Proverbs 4:23) before expecting downstream changes in behavior. Foster peace and unity within the family, avoiding all practices that could harm the sacred bonds of marriage and family relationships.",
      };
    },
  },
  {
    id: 8,
    text: "Thou shalt not steal",
    keyPoints:
      "Respecting others' property, avoiding fraud, deception, and exploitation in all forms. This includes manstealing, slave dealing, wars of conquest, theft, robbery, overreaching in trade, and non-payment of just debts or wages.",
    analyze(inputText) {
      const lowerInput = inputText.toLowerCase();
      const keywords = [
        "steal",
        "stole",
        "stolen",
        "take",
        "took",
        "taken",
        "fraud",
        "deceive",
        "cheat",
        "theft",
        "robbery",
        "dishonesty",
        "exploit",
        "embezzle",
        "piracy",
        "greed",
        "avarice",
        "selfishness",
        "laziness",
        "waste",
        "negligence",
        "underpayment",
        "overcharging",
        "scam",
      ];
      const violated = keywords.some((word) => lowerInput.includes(word));
      return {
        violated,
        explanation: violated
          ? "The underlying intent involves taking what belongs to another, reflecting a heart posture of greed or exploitation."
          : "The heart posture respects others' property and demonstrates integrity in all dealings.",
        biblicalReasoning:
          "Exodus 20:15 - 'Thou shalt not steal.' This commandment demands strict integrity in all affairs of life, condemning fraud and every attempt to advantage oneself by others' misfortune. Both public and private sins are included in this prohibition.",
        guidance:
          "Practice strict integrity in all business dealings, promptly paying debts and wages, and avoiding exploitation of others' weakness. Lasting integrity begins with upstream transformation of the heart's desires - address issues of greed and selfishness before expecting downstream changes in actions.",
      };
    },
  },
  {
    id: 9,
    text: "Thou shalt not bear false witness against thy neighbor",
    keyPoints:
      "Truthfulness in all dealings, avoiding deception, slander, and misrepresentation",
    analyze(inputText) {
      const lowerInput = inputText.toLowerCase();
      const keywords = [
        "lie",
        "lied",
        "false",
        "deceive",
        "slander",
        "gossip",
        "deception",
        "misrepresentation",
        "perjury",
        "rumor",
        "backbite",
        "dishonest",
        "half-truth",
        "omission",
        "spin",
        "flattery",
        "exaggeration",
        "hypocrisy",
        "pretense",
        "guile",
      ];
      const violated = keywords.some((word) => lowerInput.includes(word));
      return {
        violated,
        explanation: violated
          ? "The internal orientation involves deception or a willingness to misrepresent the truth for selfish gain or to harm others."
          : "The heart posture demonstrates truthfulness and honesty in dealings with others.",
        biblicalReasoning:
          "Exodus 20:16 - 'Thou shalt not bear false witness.' Every attempt to deceive, including intentional suppression of truth, violates this commandment.",
        guidance:
          "Cultivate truthfulness in all communication, avoiding exaggeration, deception, and harmful speech about others. True honesty begins with upstream transformation of the heart - address issues of pride, fear, or desire to harm others before expecting downstream changes in speech.",
      };
    },
  },
  {
    id: 10,
    text: "Thou shalt not covet",
    keyPoints:
      "Avoiding selfish desire for others' possessions, guarding the heart against envy",
    analyze(inputText) {
      const lowerInput = inputText.toLowerCase();
      const keywords = [
        "want",
        "wanted",
        "envy",
        "envied",
        "desire",
        "jealous",
        "covet",
        "greed",
        "longing",
        "discontent",
        "comparison",
        "craving",
        "striving",
        "lack",
        "dissatisfaction",
        "yearning",
        "lusting",
        "materialism",
        "consumerism",
      ];
      const violated = keywords.some((word) => lowerInput.includes(word));
      return {
        violated,
        explanation: violated
          ? "The internal desire stems from discontentment and a selfish longing for what belongs to others, striking at the root of all sin."
          : "The heart posture reflects contentment and respect for others' possessions and relationships.",
        biblicalReasoning:
          "Exodus 20:17 - 'Thou shalt not covet.' This commandment strikes at the root of all sin by prohibiting selfish desire that leads to wrongdoing.",
        guidance:
          "Cultivate contentment with God's provision, rejoicing in others' blessings rather than envying their possessions or relationships. Remember, transformation begins upstream - address heart issues of discontentment and comparison before expecting downstream changes in behavior.",
      };
    },
  },
];
