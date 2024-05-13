import { Button } from '@/components/ui/button';

export default function ActionButton({ onClick, text, icon }) {
  //   return (
  //     <Button className="group overflow-hidden" onClick={onClick}>
  //       <div className="relative">
  //         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:translate-y-[50px] transition">
  //           {icon}
  //         </div>
  //         <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[50px] group-hover:-translate-y-1/2 transition">
  //           {text}
  //         </p>
  //       </div>
  //     </Button>
  //   );

  return (
    <Button className="group" onClick={onClick}>
      <div className="relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100 group-hover:rotate-[360deg] group-hover:opacity-0 transition">
          {icon}
        </div>
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition">
          {text}
        </p>
      </div>
    </Button>
  );
}
