import React from 'react';
import { commandments } from '../utils/commandments';
import Header from '../components/Header';
import tenCommandmentsImage from '../assets/images/Ten Commandments Fiery Handwriting.png';
import OfflineIndicator from '../components/OfflineIndicator';

export default function Education({ onNavigateToLightshedder }) {
  return (
    <div className="min-h-screen">
      <OfflineIndicator />
      <div className="content-overlay">
        <Header activeTab="education" onToggleTab={onNavigateToLightshedder} />
        <main className="max-w-4xl mx-auto px-4 py-8">
          <div className="card bg-white dark:bg-gray-800">
            <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mb-8">
              <img src={tenCommandmentsImage} alt="Ten Commandments" className="w-28 h-28 sm:w-36 sm:h-36 object-contain rounded-lg" />
            </div>
            <h1 className="text-3xl sm:text-4xl text-center mb-8 text-gray-900 dark:text-white">
              Understanding the Ten Commandments
            </h1>
            <div className="prose max-w-none">
              <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
                The Ten Commandments, also known as the Decalogue, are divine principles spoken out loud for multitudes to hear before being given by God to Moses on Mount Sinai. As timeless guides for conduct, the 10 commandments are worthy of human attention and form the foundation of moral and spiritual life through reason, tradition, or the written word.
              </p>
              <section className="mb-12">
                <h2 className="text-2xl sm:text-3xl mb-6 text-gray-900 dark:text-white">The Two Great Commandments</h2>
                <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
                  Jesus summarized the law in two commandments:
                </p>
                <ul className="list-disc pl-6 mb-8 text-lg space-y-3 text-gray-700 dark:text-gray-300">
                  <li>Love the Lord your God with all your heart, soul, and mind (Matthew 22:37-38)</li>
                  <li>Love your neighbor as yourself (Matthew 22:39)</li>
                </ul>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  The first four commandments relate to our relationship with God, while the last six relate to our relationships with others. In all our dealings with others, we should follow the Golden Rule: "Therefore all things whatsoever ye would that men should do to you, do ye even so to them: for this is the law and the prophets" (Matthew 7:12).
                </p>
              </section>
              <section className="mb-12">
                <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-xl mb-8">
                  <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">Transforming Actions Through Renewed Thinking</h3>
                  <p className="text-blue-700 dark:text-blue-300 text-lg">
                    True transformation begins with renewing our minds (Romans 12:2). Before we can change our actions (downstream), we must first transform our thinking and attention (upstream). The condition of our heart determines our actions, and lasting change requires addressing the root issues of our thoughts, desires, and intentions.
                  </p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-950 p-6 rounded-xl mb-8">
                  <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">Imitating Christ: The Perfect Example</h3>
                  <p className="text-purple-700 dark:text-purple-300 text-lg">
                    Christ Jesus is the perfect embodiment of the Ten Commandments - He is the Word made flesh (John 1:14) who perfectly lived out every divine principle. To imitate Him is to make the most earnest effort to reflect His character in our thoughts, words, and deeds. As 1 Peter 2:21 says, "Christ... left us an example, that you should follow His steps."
                  </p>
                </div>
                <div className="bg-indigo-50 dark:bg-indigo-950 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-indigo-800 dark:text-indigo-200 mb-4">The Third Angel's Message: Revelation 14</h3>
                  <p className="text-indigo-700 dark:text-indigo-300 text-lg mb-4">
                    The third angel's message in Revelation 14 emphasizes the importance of keeping God's commandments. Revelation 14:12 says, "Here is the patience of the saints: here are they that keep the commandments of God, and the faith of Jesus." This message calls God's people to persevere in keeping all of God's commandments, especially in the face of end-time challenges.
                  </p>
                  <p className="text-indigo-700 dark:text-indigo-300 text-lg">
                    The third angel's message also warns against worshiping the beast and receiving his mark, which represents a counterfeit system that opposes God's law and changes the timing of the 4th commandment in God's example at creation. Those who remain faithful to God's commandments and creation timing demonstrate their loyalty to the Creator and their faith in Jesus.
                  </p>
                </div>
              </section>
              <section>
                <h2 className="text-2xl sm:text-3xl mb-8 text-gray-900 dark:text-white">The Ten Commandments</h2>
                <div className="space-y-8 mt-10">
                  {commandments.map((cmd) => (
                    <div key={cmd.id} className="border-l-4 border-blue-500 dark:border-blue-700 pl-6 py-4 bg-gray-50 dark:bg-gray-700 rounded-r-lg">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                        {cmd.id}. {cmd.text}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg"><strong>Key Points:</strong> {cmd.keyPoints}</p>
                      <div className="bg-white dark:bg-gray-800 p-5 rounded-lg">
                        <h4 className="font-bold text-gray-900 dark:text-white mb-3 text-lg">Biblical Reasoning:</h4>
                        <p className="text-gray-700 dark:text-gray-300">{cmd.analyze("").biblicalReasoning}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
              <section className="mt-16">
                <h2 className="text-2xl sm:text-3xl mb-6 text-gray-900 dark:text-white">The Unity of the Law</h2>
                <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
                  James 2:10 teaches us that "Whoever keeps the whole law but fails in one point has become guilty of all of it." This doesn't mean that all sins are equally heinous, but rather that breaking any commandment shows a disregard for the Lawgiver and His perfect standard.
                </p>
                <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
                  As Jesus explained in Matthew 22:40, "On these two commandments depend all the Law and the Prophets." The law of love underlies all of God's commandments, and when we violate any commandment, we break this fundamental principle.
                </p>
                <div className="bg-red-50 dark:bg-red-950 p-6 rounded-xl mb-8 border-l-4 border-red-500">
                  <h3 className="text-xl font-bold text-red-800 dark:text-red-200 mb-4">Love and the Decalogue</h3>
                  <p className="text-red-700 dark:text-red-300 text-lg">
                    Love, defined as self-sacrifice for the best of others, is not possible without rejoicing in the lack of iniquity enjoined by the Decalogue. True love does not rejoice in wrongdoing but rejoices with the truth (1 Corinthians 13:6). Therefore, to love truly is to uphold the moral standards God has set forth in His law.
                  </p>
                </div>
                <h2 className="text-2xl sm:text-3xl mt-10 mb-6 text-gray-900 dark:text-white">Practical Application</h2>
                <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
                  The Ten Commandments are not merely rules to follow but principles that guide us toward a life of love, integrity, and holiness. They reveal God's character and show us the path to true fulfillment.
                </p>
                <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
                  Remember that lasting change requires addressing upstream issues - our thoughts, desires, and intentions - before we can expect downstream changes in our actions. As Proverbs 4:23 says, "Keep your heart with all vigilance, for from it flow the springs of life."
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  As you use this light shedder, remember that its purpose is not to condemn but to help us understand how our actions align with God's perfect standard, leading us to a deeper relationship with Him and others. True transformation begins with renewing our minds and redirecting our attention toward God and His purposes, following the example of Christ who perfectly embodied these divine principles.
                </p>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}