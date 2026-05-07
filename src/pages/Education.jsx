import React from "react";

export default function Education({ onNavigateToLightshedder }) {
  return (
    <div className="min-h-screen">
      <div className="content-overlay">
        {/* Header/Navigation would be here, but using consistent pattern from Home page */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl sm:text-3xl mb-6 text-gray-900 dark:text-white">
            Learn About the Commandments
          </h2>

          <div className="prose dark:prose-invert max-w-none">
            <p className="text-emerald-700 dark:text-emerald-300 text-lg mb-4">
              The willingness of the thief on the cross to call Jesus "Master"
              while He was humiliated and tortured demonstrates a heart ready
              for moral restoration under Christ's guidance. This recognition of
              divine authority in the midst of suffering shows that God's moral
              image is shown to be restorable when we are in harmony with God's
              commands in the decalogue as much as possible based on the
              availability of good tradition, reason, or written word to us.
            </p>

            {/* Rest of the Education page content continues here */}
          </div>
        </div>
      </div>
    </div>
  );
}
