import { SHOW_TIME } from "../constants/lobby";

export default function LobbyIntro() {
  const now = new Date();

  const todayShowTime = new Date();
  todayShowTime.setHours(SHOW_TIME.hour, SHOW_TIME.minute, 0, 0);

  const isToday = now < todayShowTime;

  return (
    <section className="lobby-intro mx-auto w-full text-center">
      <h1 className="lobby-title mx-auto font-bold tracking-[-0.02em]">
        {isToday ? (
          <>
            Today&apos;s live trivia show is
            <br />
            scheduled for
            <br />
            at 2:00 PM
          </>
        ) : (
          <>
            Get ready! Tomorrow&apos;s live
            <br />
            trivia show kicks off at
            <br />
            at 2:00 PM
          </>
        )}
      </h1>
    </section>
  );
}
