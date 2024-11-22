"use client";
import CountUp from "react-countup";

export interface ICountUpProps {
  start: number;
  end: number;
  delay: number;
}
export default function NumberCountUp({ start, end, delay }: ICountUpProps) {
  return <CountUp start={start} end={end} delay={delay}></CountUp>;
}
