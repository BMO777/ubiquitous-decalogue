import React from "react";
import { commandments } from "../utils/commandments";
import Header from "../components/Header";
import tenCommandmentsImage from "../assets/images/Ten Commandments Fiery Handwriting.png";
import OfflineIndicator from "../components/OfflineIndicator";

export default function Education({ onNavigateToLightshedder }) {
  return (
    <div className="min-h-screen">
      <OfflineIndicator />
      <div className="content-overlay">
        <Header activeTab="education" onToggleTab={onNavigateToLightshedder} />
        <main className="max-w-4xl mx-auto px-4 py-8">
          <div className="card bg-white dark:bg-gray-800">
            <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mb-8">
              <a href={tenCommandmentsImage} className="flex-shrink-0">
                <img
                  src={tenCommandmentsImage}
                  alt="Ten Commandments"
                  className="w-28 h-28 sm:w-36 sm:h-36 object-contain rounded-lg hover:opacity-80 transition-opacity"
                />
              </a>
            </div>
            <h1 className="text-3xl sm:text-4xl text-center mb-8 text-gray-900 dark:text-white">
              Understanding the Ten Commandments
            </h1>
            <div className="prose max-w-none">
              <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
                The Ten Commandments, also known as the Decalogue, are divine
                principles that hold a unique place in history. It is profoundly
                special that these laws were{" "}
                <span className="font-bold text-advent-primary dark:text-advent-secondary">
                  spoken out loud for multitudes to hear
                </span>{" "}
                directly from the Creator before being given by God to Moses on
                Mount Sinai as a copy from a template in the heavenly sanctuary.
                This awe‑inspiring event underscores their supreme importance
                and universal relevance. Based on timeless principles for the
                heart's posture, the 10 commandments are worthy of human
                attention and form the foundation of moral and spiritual life
                through reason, tradition, or the written word. Obedience to its
                principles involves the happiness of all, and with it the
                stability, the very foundation and framework, of human society.
              </p>
              <section className="mb-12">
                <h2 className="text-2xl sm:text-3xl mb-6 text-gray-900 dark:text-white">
                  The Two Great Commandments
                </h2>
                <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
                  Jesus summarized the 10 commandments in two commandments:
                </p>
                <ul className="list-disc pl-6 mb-8 text-lg space-y-3 text-gray-700 dark:text-gray-300">
                  <li>
                    Love the Lord your God with all your heart, soul, and mind
                    (Matthew 22:37-38)
                  </li>
                  <li>Love your neighbor as yourself (Matthew 22:39)</li>
                </ul>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  The first four commandments relate to our relationship with
                  God, while the last six relate to our relationships with
                  others. In all our dealings with others, we should follow the
                  Golden Rule: "Therefore all things whatsoever ye would that
                  men should do to you, do ye even so to them: for this is the
                  law and the prophets" (Matthew 7:12).
                </p>
              </section>
              <section className="mb-12">
                <div className="bg-blue-50 dark:bg-blue-950 p<dyad-write path="src/pages/Education.jsx" description="Continue the Education.jsx page with the correct closing tags and next section"> </p> </div> <div className="bg-emerald-50 dark:bg-emerald-950 p-6 rounded-xl mb-8 border-l-4 border-emerald-500"> <h3 className="text-xl font-bold text-emerald-800 dark:text-emerald-200 mb-4"> Moral Restoration and the Image of God </h3> <p className="text-emerald-700 dark:text-emerald-300 text-lg"> The willingness of the thief on the cross to call Jesus "Master" while He was humiliated and tortured demonstrates a heart ready for moral restoration under Christ's guidance. This recognition of divine authority in the midst of suffering shows that God's moral image is shown to be restorable. It reminds us that God’s love and moral standards are always available to us, no matter our past. By choosing to follow Him, we allow His image to be restored in us—heart, mind, and spirit. </p> <p className="text-emerald-700 dark:text-emerald-300 text-lg"> The story of the thief on the cross who called Jesus “Master” while He was brutally humiliated and agonizingly tortured is a testament to the courage of faith that transcends suffering. Jesus, stripped of His dignity, nailed to a cross, and mocked by crowds, endured the full weight of human cruelty—physical agony, emotional despair, and the weight of the world’s sin. Yet, in that moment of unimaginable suffering, the thief, facing his own death, chose to recognize Jesus’ divine authority. This act was not a casual acknowledgment but a selfless surrender to a Savior who was himself being treated as a criminal. The thief’s faith was not born of comfort or convenience but of conviction—a recognition that even in the midst of Jesus’ humiliation, His lordship was absolute. It took extraordinary trust to call someone “Lord” who was being treated as a criminal, mocked, and dying in public. </p> <p className="text-emerald-700 dark:text-emerald-300 text-lg"> This story challenges us to reflect: What does it mean to submit to God’s authority when the world offers only humiliation and trial? The thief’s faith was not about avoiding suffering but about choosing redemption through trust in a God who, in His own suffering, demonstrated the ultimate act of love. His example shows that moral restoration is not about avoiding pain but about aligning our hearts with God’s truth, even when the path is steep and the cost is high. God’s moral character—His goodness, justice, and love—is not something we can “fix” on our own. Instead, it’s something we can restore in our lives by aligning our hearts with God’s truth. This restoration isn’t about pretending to be perfect or following rules blindly. It’s about trusting God’s guidance, even when life feels unfair or painful. When we make choices that reflect what we know is right—whether through common sense, the Bible, reason, or the wisdom available—we begin to mirror the character of our Creator. </p> <p className="text-emerald-700 dark:text-emerald-300 text-lg"> When we align our lives with these principles, we reflect the character of our Creator. This restoration is not merely about outward compliance but about a heart that recognizes and submits to the sovereignty of God, even when the world offers only humiliation and trial. </p> </div>