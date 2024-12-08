export interface ISectionHeadingProps {
  title: string;
}
export default function SectionHeading({ title }: ISectionHeadingProps) {
  return (
    <div>
      <h3 className="text-4xl text-center font-semibold mb-6">{title}</h3>
    </div>
  );
}
