export default function RulesSection() {
  return (
    <section className="lobby-rules mx-auto w-full text-black">
      <h2 className="rules-heading text-center font-normal italic">
        Live Trivia Show Rules:
      </h2>

      <div className="rules-copy font-normal">
        <p>
          1. Answer 10 multiple-choice questions correctly during the live
          trivia show to win cash prizes deposited directly into your mobile
          money account. Please note: the cash prize is divided equally among
          all winners.
        </p>

        <p>
          2. You&apos;re eliminated if you answer incorrectly, skip questions,
          or don&apos;t answer at all.
        </p>

        <p className="rules-eliminated italic">
          Eliminated? No worries—you can still earn points for correct answers.
          Stay tuned; something extra sweet is coming soon.
        </p>
      </div>

      <div className="rules-feedback text-center">
        <a
          href="https://play.google.com/store/apps/details?id=com.chemshaa"
          target="_blank"
          rel="noopener noreferrer"
          className="font-normal text-black underline underline-offset-[2px]"
        >
          Share your feedback on our app
        </a>
      </div>
    </section>
  )
}
