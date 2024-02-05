export interface CardProps {
    children: string;
    onClick: () => void;
    imgSrc: string;
}

export const Card = ({ children, onClick, imgSrc }: CardProps) => {
  return (
    <button className ='card' onClick = {onClick}>{children}
    <img className='card-image' src = {imgSrc}></img>
    </button>
  )
}

export default Card