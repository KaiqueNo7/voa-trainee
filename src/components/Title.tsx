export default function Title({ text, white }: { text: string, white?: boolean }) {
  return (
    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center" 
    style={white ? { color: 'white' } : {}}>
      {text}
    </h1>
  );
}