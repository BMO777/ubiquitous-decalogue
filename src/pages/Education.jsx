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
                special that these laws were
                <span className="font-bold text-advent-primary dark:text-advent-secondary">
                  spoken out loud for multitudes to hear
                </span>
                directly from the Creator before being given by God to Moses on
                Mount Sinai. This awe‑inspiring event underscores their supreme
                importance and universal relevance. Based on timeless principles
                for the heart's posture, the 10 commandments are worthy of human
                attention and form the foundation of moral and spiritual life
                through reason, tradition, or the written word. Obedience to its
                principles involves the happiness of all, and with it the
                stability, the very foundation and framework, of human society.
              </p>

              {/* ... other sections remain unchanged ... */}

              {/* Moral Restoration and the Image of God */}
              <section className="bg-emerald-50 dark:bg-emerald-950 p-6 rounded-xl mb-8 border-l-4 border-emerald-500">
                <h3 className="text-xl font-bold text-emerald-800 dark:text-emerald-200 mb-4">
                  Moral Restoration and the Image of God
                </h3>
                <p className="text-emerald-700 dark:text-emerald-300 mb-4">
                  The story of the thief on the cross who called Jesus “Master”
                  while He was{" "}
                  <strong>brutally humiliated and agonizingly tortured</strong>{" "}
                  is a powerful testimony to the courage of faith that can rise
                  even in the darkest moments. Jesus, stripped of His dignity,
                  nailed to a cross, mocked by crowds, and bearing the full
                  weight of human cruelty—physical agony, emotional despair, and
                  the sins of the world—still extended grace to a dying
                  criminal. In that unimaginable suffering, the thief, facing
                  his own death, chose to{" "}
                  <strong>recognize Jesus’ divine authority</strong> and call
                  Him “Lord.”
                </p>
                <p className="text-emerald-700 dark:text-emerald-300 mb-4">
                  This was not a casual acknowledgment. It was a
                  <strong>self‑sacrificial surrender</strong> to a Savior who
                  was being treated as a criminal. The thief’s faith was not
                  born of comfort or convenience but of deep conviction—a
                  willingness to trust God’s lordship{" "}
                  <strong>
                    even when the world offers only humiliation and trial
                  </strong>
                  . This faith shows that moral restoration is not about
                  avoiding pain but about choosing redemption through trust in a
                  God who, in His own suffering, demonstrated the ultimate act
                  of love.
                </p>
                <p className="text-emerald-700 dark:text-emerald-300 mb-4">
                  From this encounter we learn that{" "}
                  <strong>
                    God’s moral character—His goodness, justice, and love—is not
                    something we can “fix” on our own
                  </strong>
                  . Rather, it is something we can{" "}
                  <strong>restore in our lives</strong> by aligning our hearts
                  with God’s truth. Restoration is not about pretending to be
                  perfect or following rules blindly; it is about{" "}
                  <strong>trusting God’s guidance</strong> even when life feels
                  unfair or painful. When we make choices that reflect what we
                  know is right—whether through common sense, Scripture, or the
                  wisdom of trusted tradition—we begin to{" "}
                  <strong>mirror the character of our Creator</strong>.
                </p>
                <p className="text-emerald-700 dark:text-emerald-300 mb-4">
                  True restoration goes beyond merely doing the right thing. It
                  is a
                  <strong>heart‑level submission to God’s sovereignty</strong>,
                  even when the world offers only humiliation and trial. The
                  thief’s story challenges us:{" "}
                  <em>
                    What does it mean to submit to God’s authority when
                    everything around us seems to condemn Him?
                  </em>{" "}
                  His faith shows that moral restoration is not about avoiding
                  pain but about{" "}
                  <strong>
                    choosing redemption through trust in a God who, in His own
                    suffering, demonstrated the ultimate act of love
                  </strong>
                  .
                </p>
                <p className="text-emerald-700 dark:text-emerald-300 mb-4">
                  When we align our lives with these principles, we allow{" "}
                  <strong>
                    God’s image to be restored in us—heart, mind, and spirit
                  </strong>
                  . This restoration is available to everyone, no matter our
                  past, because{" "}
                  <strong>
                    God’s love and moral standards are always present
                  </strong>
                  . By choosing to follow Him, we participate in the renewal of
                  the divine image within us, reflecting the character of our
                  Creator even amid the harshest trials.
                </p>
              </section>

              {/* ... remaining sections unchanged ... */}
              <section className="mt-16">
                <h2 className="text-2xl sm:text-3xl mb-6 text-gray-900 dark:text-white">
                  The Unity of the Law
                </h2>
                <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
                  James 2:10 teaches us that "Whoever keeps the whole law but
                  fails in one point has become guilty of all of it." This
                  doesn't mean that all sins are equally heinous, but rather
                  that breaking any commandment shows a disregard for the
                  Lawgiver and His perfect standard.
                </p>
                <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
                  As Jesus explained in Matthew 22:40, "On these two
                  commandments depend all the Law and the Prophets." The law of
                  love underlies all of God's commandments, and when we violate
                  any commandment, we break this fundamental principle.
                </p>
                <div className="bg-red-50 dark:bg-red-950 p-6 rounded-xl mb-8 border-l-4 border-red-500">
                  <h3 className="text-xl font-bold text-red-800 dark:text-red-200 mb-4">
                    Love and the Decalogue{" "}
                  </h3>
                  <p className="text-red-700 dark:text-red-300 text-lg">
                    Love, defined as self‑sacrifice for the best of others, is
                    not possible without rejoicing in the absence of the
                    cherished sinful thought processes that lead to the
                    transgressions the Ten Commandments forbid. True love does
                    not rejoice in wrongdoing but rejoices with the truth
                    (1 Corinthians 13:6). Therefore, to love truly is to uphold
                    the moral standards God has set forth in His law.
                  </p>
                </div>
                <h2 className="text-2xl sm:text-3xl mt-10 mb-6 text-gray-900 dark:text-white">
                  Practical Application
                </h2>
                <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
                  Every commandment is an expression of love and mercy from God.
                  They flow as a saving power designed to protect us and secure
                  our well‑being, both now and forever.
                </p>
                <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
                  The Ten Commandments are not merely rules to follow but
                  principles that guide us toward a life of love, integrity, and
                  holiness. They reveal God's character and show us the path to
                  true fulfillment.
                </p>
                <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
                  Remember that lasting change requires addressing upstream
                  issues—our thoughts, desires, and intentions—before we can
                  expect downstream changes in our actions. As Proverbs 4:23
                  says, "Keep your heart with all vigilance, for from it flow
                  the springs of life."
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  As you use this light shedder, remember that its purpose is
                  not to condemn but to help us understand how our actions align
                  with God's perfect standard, leading us to a deeper
                  relationship with Him and others. True transformation begins
                  with renewing our minds and redirecting our attention toward
                  God and His purposes, following the example of Christ who
                  perfectly embodied these divine principles.
                </p>
              </section>
              <section className="mt-16">
                <h2 className="text-2xl sm:text-3xl mb-6 text-gray-900 dark:text-white">
                  The Law as a Mirror of the Soul
                </h2>
                <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
                  The Ten Commandments serve as a divine mirror, reflecting the
                  true condition of our hearts. When we look into this mirror,
                  we see not just our outward actions, but the hidden motives
                  and secret desires that drive them. This reflection is not
                  meant to discourage us, but to lead us to a place of honest
                  self‑examination and a deeper reliance on God's grace for
                  transformation.
                </p>
                <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
                  By examining our lives through the lens of the Decalogue, we
                  can identify the "upstream" thought patterns that lead to
                  "downstream" violations. This awareness is the first step
                  toward a renewed mind and a heart that beats in harmony with
                  God's will.
                </p>
                <div className="bg-green-50 dark:bg-green-950 p-6 rounded-xl mb-8 border-l-4 border-green-500">
                  <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">
                    The Law as a Protective Hedge
                  </h3>
                  <p className="text-green-700 dark:text-green-300 text-lg">
                    God's law is not a restrictive fence but a protective hedge.
                    It is designed to keep us within the boundaries of His love
                    and protection, shielding us from the destructive
                    consequences of sin. When we walk within these boundaries,
                    we find true freedom, peace, and the fullness of life that
                    God intends for every one of His children.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
