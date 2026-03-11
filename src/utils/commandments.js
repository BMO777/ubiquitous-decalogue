// src/utils/commandments.js
export const commandments = [
  {
    id: 1,
    text: "Thou shalt have no other gods before Me",
    keyPoints:
      "Exclusive worship of God, avoiding anything that takes precedence over God in our affections or service",
    questions: [
      "Is this activity more important to you than your relationship with God?",
      "Are you relying on this thing for security or happiness instead of God?",
    ],
    analyze(inputText) {
      const lowerInput = inputText.toLowerCase();
      const keywords = [
        "money",
        "wealth",
        "career",
        "success",
        "idol",
        "fame",
        "power",
        "obsession",
        "priority",
        "addiction",
      ];
      const violated = keywords.some((k) => lowerInput.includes(k));
      return {
        violated,
        explanation: violated
          ? "The analysis suggests a potential displacement of God as the primary priority in favor of temporal pursuits or 'idols' of the heart."
          : "The heart posture appears to maintain God's rightful place as supreme.",
        biblicalReasoning:
          "Exodus 20:3 - 'Thou shalt have no other gods before me.' God alone is entitled to supreme reverence and worship.",
        guidance:
          "Evaluate what occupies your thoughts and time most. Redirect your primary devotion back to the Creator.",
      };
    },
  },
  {
    id: 2,
    text: "Thou shalt not make unto thee any graven image",
    keyPoints:
      "No worship of God through images or similitudes, avoiding anything that lowers our conception of God",
    questions: [
      "Are you using a physical object to represent God?",
      "Does this practice limit your understanding of God's infinite nature?",
    ],
    analyze(inputText) {
      const lowerInput = inputText.toLowerCase();
      const keywords = [
        "image",
        "statue",
        "worship",
        "idol",
        "shrine",
        "talisman",
        "representation",
        "icon",
      ];
      const violated = keywords.some((k) => lowerInput.includes(k));
      return {
        violated,
        explanation: violated
          ? "Using material objects to represent the Divine can limit and degrade our understanding of God's infinite character."
          : "The practice respects the spiritual and infinite nature of God.",
        biblicalReasoning:
          "Exodus 20:4-5 - 'Thou shalt not make unto thee any graven image.' Material representations cannot capture the glory of the Eternal One.",
        guidance:
          "Focus on worshiping God in spirit and truth, relying on His Word rather than physical aids.",
      };
    },
  },
  {
    id: 3,
    text: "Thou shalt not take the name of the Lord thy God in vain",
    keyPoints:
      "Respectful and reverent use of God's name, avoiding careless or trivial mention",
    questions: [
      "Did you use God's name casually or as a curse?",
      "Are you representing God's name poorly through your actions?",
    ],
    analyze(inputText) {
      const lowerInput = inputText.toLowerCase();
      const holyNames = ["god", "lord", "jesus", "christ", "yahweh"];
      const irreverentTerms = [
        "damn",
        "hell",
        "curse",
        "swear",
        "casual",
        "joke",
        "slang",
        "omg",
      ];
      const violated =
        holyNames.some((n) => lowerInput.includes(n)) &&
        irreverentTerms.some((t) => lowerInput.includes(t));
      return {
        violated,
        explanation: violated
          ? "The use of holy names in a common or irreverent context diminishes the sanctity of God's character."
          : "The language used demonstrates appropriate reverence for the Divine.",
        biblicalReasoning:
          "Exodus 20:7 - 'Thou shalt not take the name of the Lord thy God in vain.' His name represents His holy character.",
        guidance:
          "Practice mindful speech. Let your words reflect the high esteem in which you hold the Creator.",
      };
    },
  },
  {
    id: 4,
    text: "Remember the Sabbath day, to keep it holy",
    keyPoints:
      "Observing the seventh day (Friday evening through Saturday evening) as a memorial of creation, avoiding all work and worldly concerns",
    questions: [
      "Is this a worldly or business activity performed between Friday sunset and Saturday sunset?",
      "Is this an act of necessity or mercy?",
    ],
    analyze(inputText) {
      const lowerInput = inputText.toLowerCase();
      const sabbathTime = [
        "friday night",
        "friday evening",
        "saturday",
        "sabbath",
        "seventh day",
      ];
      const workTerms = [
        "work",
        "business",
        "shop",
        "buy",
        "sell",
        "transaction",
        "project",
        "meeting",
        "career",
        "money",
      ];
      const mercyTerms = [
        "mercy",
        "help",
        "sick",
        "emergency",
        "necessity",
        "heal",
        "food",
        "hunger",
      ];

      const mentionsSabbath = sabbathTime.some((t) => lowerInput.includes(t));
      const mentionsWork = workTerms.some((w) => lowerInput.includes(w));
      const mentionsMercy = mercyTerms.some((m) => lowerInput.includes(m));

      const violated = mentionsSabbath && mentionsWork && !mentionsMercy;
      return {
        violated,
        explanation: violated
          ? "Engaging in secular work or worldly business during the sacred hours of the Sabbath (Friday sunset to Saturday sunset) deviates from the memorial of creation."
          : "The activity aligns with the spirit of Sabbath rest or falls under the category of necessity and mercy.",
        biblicalReasoning:
          "Exodus 20:8-11 - 'Remember the Sabbath day, to keep it holy.' It is a day for rest and communion with the Creator.",
        guidance:
          "Prepare for the Sabbath in advance so that your mind and body can fully enter into God's rest.",
      };
    },
  },
  {
    id: 5,
    text: "Honor thy father and thy mother",
    keyPoints:
      "Respecting and caring for parents, extending to all delegated authority",
    questions: [
      "Does this action show disrespect to your parents?",
      "Are you neglecting your responsibility to care for your elders?",
    ],
    analyze(inputText) {
      const lowerInput = inputText.toLowerCase();
      const keywords = [
        "parent",
        "father",
        "mother",
        "disrespect",
        "ignore",
        "rebel",
        "disobey",
        "neglect",
      ];
      const violated = keywords.some((k) => lowerInput.includes(k));
      return {
        violated,
        explanation: violated
          ? "The heart posture suggests a lack of honor or respect for the authority and care provided by parents."
          : "The action demonstrates proper respect for parental and family bonds.",
        biblicalReasoning:
          "Exodus 20:12 - 'Honor thy father and thy mother.' This is the first commandment with a promise.",
        guidance:
          "Seek to understand and appreciate the role of those who have cared for you, showing love through service.",
      };
    },
  },
  {
    id: 6,
    text: "Thou shalt not kill",
    keyPoints:
      "Preserving life, avoiding hatred, revenge, and actions that harm others",
    questions: [
      "Are you harboring hatred or anger toward someone?",
      "Does this action physically or emotionally harm another person?",
    ],
    analyze(inputText) {
      const lowerInput = inputText.toLowerCase();
      const keywords = [
        "kill",
        "murder",
        "harm",
        "hate",
        "anger",
        "revenge",
        "abuse",
        "violence",
        "assault",
      ];
      const violated = keywords.some((k) => lowerInput.includes(k));
      return {
        violated,
        explanation: violated
          ? "Harboring hatred or seeking harm against another violates the sanctity of life and the spirit of this commandment."
          : "The heart posture seeks to preserve and value human life.",
        biblicalReasoning:
          "Exodus 20:13 - 'Thou shalt not kill.' Christ taught that even anger without cause is a violation of this principle.",
        guidance:
          "Replace anger with forgiveness and hatred with the love of Christ.",
      };
    },
  },
  {
    id: 7,
    text: "Thou shalt not commit adultery",
    keyPoints:
      "Maintaining purity in thoughts, desires, and actions regarding marriage and family",
    questions: [
      "Does this involve impure thoughts or desires?",
      "Are you being unfaithful to your marriage or family commitments?",
    ],
    analyze(inputText) {
      const lowerInput = inputText.toLowerCase();
      const keywords = [
        "adultery",
        "lust",
        "unfaithful",
        "cheat",
        "affair",
        "porn",
        "sensual",
        "impurity",
        "divorce",
      ];
      const violated = keywords.some((k) => lowerInput.includes(k));
      return {
        violated,
        explanation: violated
          ? "The internal desire or action compromises the purity and sacredness of the marriage covenant or family unit."
          : "The heart posture maintains purity and faithfulness in relationships.",
        biblicalReasoning:
          "Exodus 20:14 - 'Thou shalt not commit adultery.' Purity begins in the mind and heart.",
        guidance:
          "Guard your senses and thoughts, focusing on the beauty of committed, holy relationships.",
      };
    },
  },
  {
    id: 8,
    text: "Thou shalt not steal",
    keyPoints:
      "Respecting others' property, avoiding fraud, deception, and exploitation",
    questions: [
      "Are you taking something that doesn't belong to you?",
      "Is this a deceptive business practice or an unpaid debt?",
    ],
    analyze(inputText) {
      const lowerInput = inputText.toLowerCase();
      const keywords = [
        "steal",
        "theft",
        "rob",
        "fraud",
        "cheat",
        "deceive",
        "debt",
        "unpaid",
        "exploit",
        "take",
      ];
      const violated = keywords.some((k) => lowerInput.includes(k));
      return {
        violated,
        explanation: violated
          ? "Taking what belongs to another, whether through force or deception, reflects a heart of greed."
          : "The action demonstrates integrity and respect for the rights of others.",
        biblicalReasoning:
          "Exodus 20:15 - 'Thou shalt not steal.' Integrity is required in all dealings, large and small.",
        guidance:
          "Be scrupulously honest in all transactions and respect the property of your neighbor.",
      };
    },
  },
  {
    id: 9,
    text: "Thou shalt not bear false witness against thy neighbor",
    keyPoints:
      "Truthfulness in all dealings, avoiding deception, slander, and gossip",
    questions: [
      "Are you telling a lie or suppressing the truth?",
      "Are you speaking poorly of someone behind their back?",
    ],
    analyze(inputText) {
      const lowerInput = inputText.toLowerCase();
      const keywords = [
        "lie",
        "false",
        "deceive",
        "slander",
        "gossip",
        "rumor",
        "mislead",
        "dishonest",
        "fake",
      ];
      const violated = keywords.some((k) => lowerInput.includes(k));
      return {
        violated,
        explanation: violated
          ? "Deception or harmful speech about others violates the principle of truth and love for our neighbor."
          : "The communication is characterized by honesty and integrity.",
        biblicalReasoning:
          "Exodus 20:16 - 'Thou shalt not bear false witness.' Truth is the foundation of a righteous life.",
        guidance:
          "Let your 'yes' be 'yes' and your 'no' be 'no'. Speak only what is true and helpful.",
      };
    },
  },
  {
    id: 10,
    text: "Thou shalt not covet",
    keyPoints:
      "Avoiding selfish desire for others' possessions, guarding the heart against envy",
    questions: [
      "Are you jealous of what someone else has?",
      "Do you feel discontent with what God has provided for you?",
    ],
    analyze(inputText) {
      const lowerInput = inputText.toLowerCase();
      const keywords = [
        "covet",
        "envy",
        "jealous",
        "want",
        "desire",
        "greedy",
        "discontent",
        "comparison",
      ];
      const violated = keywords.some((k) => lowerInput.includes(k));
      return {
        violated,
        explanation: violated
          ? "Selfish desire for what belongs to others strikes at the root of discontentment and sin."
          : "The heart posture reflects contentment and joy in others' blessings.",
        biblicalReasoning:
          "Exodus 20:17 - 'Thou shalt not covet.' Contentment is great gain when accompanied by godliness.",
        guidance:
          "Cultivate a heart of gratitude for God's daily mercies and provisions.",
      };
    },
  },
];
