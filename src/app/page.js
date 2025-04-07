import CustomBg from "./components/CustomBg";
import { FlipWords } from "./components/HeroSection";
import { WavyBackground } from "./components/WavyBackground";

export default function Home() {
  const helloWords = [
    "Hello", // English
    "Bonjour", // French
    "Ciao", // Italian
    "こんにちは", // Japanese
    "Merhaba", // Turkish
    "Hej", // Swedish
  ];

  return (
    <>
      {/* <WavyBackground
        children={
          <FlipWords
            words={helloWords}
            duration={1500}
            className={"herotext"}
          />
        }
        waveWidth={100}
        waveOpacity={0.4}
        colors={[
          "#6366F1", // Indigo (Primary)
          "#8B5CF6", // Violet
          "#EC4899", // Pink
          "#F59E0B", // Amber
          "#10B981", // Emerald
          "#0EA5E9", // Sky Blue
        ]}
      /> */}
      <CustomBg />

      <FlipWords words={helloWords} duration={1500} className={"herotext"} />
    </>
  );
}
