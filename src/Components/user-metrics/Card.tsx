type CardDetails = {
    id: number;
    title: string;
    total: string;
    change: string;
    changeRate: number
}


type CardProps = {
    details: CardDetails;
}

function Card({ details }: CardProps) {
    return (
      <div className="flex flex-col justify-between border border-[#DBE0E5] rounded-[8px] w-[298px] h-[144px] px-[24px] py-[16px]">
        <span>{details.title}</span>
        <span className="font-bold text-[24px]">{details.total}</span>
        <div>{details.change === 'pos' ? (
            <span className="text-[#088738]">+{details.changeRate}%</span>
        ) : (
            <span className="text-[#ff2407] ">-{details.changeRate}%</span>
        )}</div>
      </div>
    );
  }

  
  export default Card;
  