import { useMemo } from "react";
import CountdownBar from "../components/CountdownBar";
import LobbyHeader from "../components/LobbyHeader";
import LobbyIntro from "../components/LobbyIntro";
import RulesSection from "../components/RulesSection";
import { useCountdown } from "../hooks/useCountdown";
import { getNextShowAtTime } from "../utils/date";

interface WaitingLobbyProps {
  onOpenMenu: () => void;
}

export default function WaitingLobby({ onOpenMenu }: WaitingLobbyProps) {
  const targetDate = useMemo(() => getNextShowAtTime(14), []);

  const remaining = useCountdown(targetDate);

  return (
    <main className="lobby-screen flex h-screen h-dvh w-full flex-col overflow-hidden bg-[#ffda29] text-black">
      <LobbyHeader onMenuClick={onOpenMenu} />

      <div className="lobby-main-content">
        <LobbyIntro />
        <RulesSection />

        <div className="lobby-bottom-space" />
      </div>

      <CountdownBar
        label="The next live trivia show begins in"
        remaining={remaining}
      />

      <div className="lobby-after-countdown" />
    </main>
  );
}
