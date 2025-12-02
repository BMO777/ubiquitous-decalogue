// src/utils/commandments.js
export const commandments = [
  {
    id: 1,
    text: "Thou shalt have no other gods before Me",
    keyPoints: "Exclusive worship of God, avoiding anything that takes precedence over God in our affections or service",
    analyze(inputText) {
      const lowerInput = inputText.toLowerCase();
      const violated = lowerInput.includes("money") || lowerInput.includes("wealth") || lowerInput.includes("career") || lowerInput.includes("success") || lowerInput.includes("idol");
      return {
        violated,
        explanation: violated ? "The action appears to place temporal concerns above divine priorities, violating the principle of exclusive devotion to God." : "The action demonstrates proper prioritization of God above all earthly concerns.",
        biblicalReasoning: "Exodus 20:3 - 'Thou shalt have no other gods before me.' God alone is entitled to supreme reverence and worship. Anything we cherish that lessens our love for God becomes an idol.",
        guidance: "Cultivate daily practices that honor God as supreme, such as prayer, Scripture study, and acts of service that reflect His priorities. Remember, true change begins with renewing your mind (Romans 12:2) - redirect your attention and thoughts toward God before expecting changes in actions.",
      };
    },
  },
  {
    id: 2,
    text: "Thou shalt not make unto thee any graven image",
    keyPoints: "No worship of God through images or similitudes, avoiding anything that lowers our conception of God",
    analyze(inputText) {
      const lowerInput = inputText.toLowerCase();
      const violated = lowerInput.includes("image") || lowerInput.includes("statue") || lowerInput.includes("worship") || lowerInput.includes("idol");
      return {
        violated,
        explanation: violated ? "The use of physical representations in worship may lead to a diminished understanding of God's infinite nature." : "The action respects the prohibition against representing the infinite God through finite means.",
        biblicalReasoning: "Exodus 20:4-5 - 'Thou shalt not make unto thee any graven image.' Attempting to represent the Eternal One by material objects would lower man's conception of God.",
        guidance: "Focus worship on the invisible, incomparable nature of God through spirit and truth, as revealed in Scripture. Transformation begins with renewing your mind to understand God's true nature - this upstream change will naturally lead to appropriate downstream worship practices.",
      };
    },
  },
  {
    id: 3,
    text: "Thou shalt not take the name of the Lord thy God in vain",
    keyPoints: "Respectful and reverent use of God's name, avoiding careless or trivial mention",
    analyze(inputText) {
      const lowerInput = inputText.toLowerCase();
      const violated = (lowerInput.includes("god") || lowerInput.includes("lord")) && (lowerInput.includes("curse") || lowerInput.includes("swear") || lowerInput.includes("casual") || lowerInput.includes("damn") || lowerInput.includes("hell"));
      return {
        violated,
        explanation: violated ? "The use of God's name in casual or irreverent contexts dishonors His holy character." : "The action demonstrates appropriate reverence for the holiness of God's name.",
        biblicalReasoning: "Exodus 20:7 - 'Thou shalt not take the name of the Lord thy God in vain.' The thoughtless mention of God in common conversation dishonors Him.",
        guidance: "Cultivate reverence for God's name through mindful speech and meditation on His majestic character as revealed in Scripture. Remember that lasting change in speech patterns begins with transforming your thoughts and attention toward God's holiness.",
      };
    },
  },
  {
    id: 4,
    text: "Remember the Sabbath day, to keep it holy",
    keyPoints: "Observing the seventh day (Friday evening through Saturday evening) as a memorial of creation, avoiding all work and worldly concerns except for acts of necessity and mercy",
    analyze(inputText) {
      const lowerInput = inputText.toLowerCase();
      
      // Check if the input mentions Friday evening or Saturday specifically
      const mentionsSabbathTime = lowerInput.includes("friday") || lowerInput.includes("saturday");
      
      // Check if the input mentions work or business activities
      const mentionsWork = lowerInput.includes("work") || 
                          lowerInput.includes("business") || 
                          lowerInput.includes("shopping") || 
                          lowerInput.includes("plans") || 
                          lowerInput.includes("transaction") ||
                          lowerInput.includes("deal") ||
                          lowerInput.includes("meeting") ||
                          lowerInput.includes("project");
      
      // Check if the input mentions worldly concerns or activities
      const mentionsWorldlyConcerns = lowerInput.includes("worldly") || 
                                     lowerInput.includes("secular") || 
                                     lowerInput.includes("material") || 
                                     lowerInput.includes("money") ||
                                     lowerInput.includes("career") ||
                                     lowerInput.includes("job");
      
      // Check if the input mentions acts of necessity and mercy (exceptions)
      const mentionsNecessityOrMercy = lowerInput.includes("necessity") || 
                                     lowerInput.includes("mercy") || 
                                     lowerInput.includes("sick") || 
                                     lowerInput.includes("suffering") || 
                                     lowerInput.includes("emergency") ||
                                     lowerInput.includes("help") ||
                                     lowerInput.includes("heal");
      
      // Check if the input mentions good works that honor God (exceptions)
      const mentionsGoodWorks = lowerInput.includes("worship") || 
                               lowerInput.includes("service") || 
                               lowerInput.includes("pray") ||
                               lowerInput.includes("bible") ||
                               lowerInput.includes("scripture");
      
      // Violation occurs when:
      // 1. Sabbath time (Friday evening or Saturday) is mentioned
      // 2. Work or worldly concerns are mentioned
      // 3. Necessity, mercy, or good works are NOT mentioned as exceptions
      const violated = mentionsSabbathTime && 
                      (mentionsWork || mentionsWorldlyConcerns) && 
                      !mentionsNecessityOrMercy && 
                      !mentionsGoodWorks;
      
      return {
        violated,
        explanation: violated ? 
          "The action involves work or worldly concerns on the Sabbath (Friday evening through Saturday evening), failing to honor it as a memorial of creation." : 
          "The action aligns with principles of Sabbath observance and restful worship.",
        biblicalReasoning: "Exodus 20:8-11 - 'Remember the Sabbath day, to keep it holy.' The seventh day includes Friday evening through Saturday evening. Those who discuss business matters or lay plans on the Sabbath are regarded by God as though engaged in the actual transaction of business. To keep the Sabbath holy, we should not even allow our minds to dwell upon things of a worldly character. However, acts of necessity and mercy are permitted, and the sick and suffering are at all times to be cared for.",
        guidance: "Set aside Friday evening through Saturday evening entirely for worship, rest, and reflection on God's creative and redemptive works. Avoid all work and worldly concerns except for acts of necessity and mercy. The commandment includes all within our gates - all household members should unite to honor God by willing service upon His holy day. Remember that the sick and suffering are to be cared for at all times, even on the Sabbath.",
      };
    },
  },
  {
    id: 5,
    text: "Honor thy father and thy mother",
    keyPoints: "Respecting and caring for parents, extending to all delegated authority",
    analyze(inputText) {
      const lowerInput = inputText.toLowerCase();
      const violated = lowerInput.includes("parent") || lowerInput.includes("father") || lowerInput.includes("mother") || lowerInput.includes("disrespect") || lowerInput.includes("ignore");
      return {
        violated,
        explanation: violated ? "The action involves disrespect or neglect toward parental authority, violating the command to honor parents." : "The action demonstrates proper respect for parental and delegated authority.",
        biblicalReasoning: "Exodus 20:12 - 'Honor thy father and thy mother.' Parents stand in God's place during early years, and rejecting their authority rejects God's authority.",
        guidance: "Show respect, love, and care for parents through actions and attitudes that reflect honor and gratitude for their role. Lasting change in relationships begins with transforming your heart attitude - address upstream issues of resentment or bitterness before expecting downstream changes in behavior.",
      };
    },
  },
  {
    id: 6,
    text: "Thou shalt not kill",
    keyPoints: "Preserving life, avoiding hatred, revenge, and actions that harm others physically or emotionally",
    analyze(inputText) {
      const lowerInput = inputText.toLowerCase();
      const violated = lowerInput.includes("kill") || lowerInput.includes("harm") || lowerInput.includes("hatred") || lowerInput.includes("anger") || lowerInput.includes("abuse");
      return {
        violated,
        explanation: violated ? "The action involves physical or emotional harm to others, or harbors hatred which is equivalent to murder in God's sight." : "The action preserves and respects the sanctity of human life created in God's image.",
        biblicalReasoning: "Exodus 20:13 - 'Thou shalt not kill.' The spirit of hatred and revenge, along with any passion leading to harm, violates this commandment.",
        guidance: "Cultivate love for others as yourself, actively seeking their welfare and avoiding all forms of harm, both physical and emotional. Remember, transformation begins with addressing upstream issues of anger, bitterness, and unforgiveness before expecting downstream changes in actions.",
      };
    },
  },
  {
    id: 7,
    text: "Thou shalt not commit adultery",
    keyPoints: "Maintaining purity in thoughts, desires, and actions regarding marriage relationships",
    analyze(inputText) {
      const lowerInput = inputText.toLowerCase();
      const violated = lowerInput.includes("adultery") || lowerInput.includes("lust") || lowerInput.includes("divorce") || lowerInput.includes("unfaithful");
      return {
        violated,
        explanation: violated ? "The action involves impurity in thoughts, desires, or actions regarding marriage relationships." : "The action maintains purity in relationships according to God's design for marriage.",
        biblicalReasoning: "Exodus 20:14 - 'Thou shalt not commit adultery.' Christ taught that evil thoughts and looks are as truly sin as unlawful deeds.",
        guidance: "Guard the heart and mind through purity in media consumption, relationships, and personal conduct that honors marriage covenant. True purity begins with upstream transformation of thoughts and desires - guard your heart (Proverbs 4:23) before expecting downstream changes in behavior.",
      };
    },
  },
  {
    id: 8,
    text: "Thou shalt not steal",
    keyPoints: "Respecting others' property, avoiding fraud, deception, and exploitation in all forms",
    analyze(inputText) {
      const lowerInput = inputText.toLowerCase();
      const violated = lowerInput.includes("steal") || lowerInput.includes("take") || lowerInput.includes("fraud") || lowerInput.includes("deceive") || lowerInput.includes("cheat");
      return {
        violated,
        explanation: violated ? "The action involves taking what doesn't belong to you, whether physically or through deception." : "The action respects others' property and demonstrates integrity in all dealings.",
        biblicalReasoning: "Exodus 20:15 - 'Thou shalt not steal.' This commandment condemns theft, fraud, and every attempt to advantage oneself by others' misfortune.",
        guidance: "Practice strict integrity in all business dealings, promptly paying debts and wages, and avoiding exploitation of others' weakness. Lasting integrity begins with upstream transformation of the heart's desires - address issues of greed and selfishness before expecting downstream changes in actions.",
      };
    },
  },
  {
    id: 9,
    text: "Thou shalt not bear false witness against thy neighbor",
    keyPoints: "Truthfulness in all dealings, avoiding deception, slander, and misrepresentation",
    analyze(inputText) {
      const lowerInput = inputText.toLowerCase();
      const violated = lowerInput.includes("lie") || lowerInput.includes("false") || lowerInput.includes("deceive") || lowerInput.includes("slander") || lowerInput.includes("gossip");
      return {
        violated,
        explanation: violated ? "The action involves deception, misrepresentation, or spreading falsehoods about others." : "The action demonstrates truthfulness and honesty in dealings with others.",
        biblicalReasoning: "Exodus 20:16 - 'Thou shalt not bear false witness.' Every attempt to deceive, including intentional suppression of truth, violates this commandment.",
        guidance: "Cultivate truthfulness in all communication, avoiding exaggeration, deception, and harmful speech about others. True honesty begins with upstream transformation of the heart - address issues of pride, fear, or desire to harm others before expecting downstream changes in speech.",
      };
    },
  },
  {
    id: 10,
    text: "Thou shalt not covet",
    keyPoints: "Avoiding selfish desire for others' possessions, guarding the heart against envy",
    analyze(inputText) {
      const lowerInput = inputText.toLowerCase();
      const violated = lowerInput.includes("want") || lowerInput.includes("envy") || lowerInput.includes("desire") || lowerInput.includes("jealous") || lowerInput.includes("covet");
      return {
        violated,
        explanation: violated ? "The action stems from or encourages covetous desires for what belongs to others." : "The action reflects contentment and respect for others' possessions and relationships.",
        biblicalReasoning: "Exodus 20:17 - 'Thou shalt not covet.' This commandment strikes at the root of all sin by prohibiting selfish desire that leads to wrongdoing.",
        guidance: "Cultivate contentment with God's provision, rejoicing in others' blessings rather than envying their possessions or relationships. Remember, transformation begins upstream - address heart issues of discontentment and comparison before expecting downstream changes in behavior.",
      };
    },
  },
];