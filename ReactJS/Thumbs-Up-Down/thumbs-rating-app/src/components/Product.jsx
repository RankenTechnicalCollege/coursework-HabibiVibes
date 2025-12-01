import wedgeImg from '../assets/Oil.webp';
export default function Product() {
  return (
    <div className="product">
      <img
        src={wedgeImg}
        alt="Golf Wedge"
        className="product-img"
      />

      <h2>Titleist Vokey SM9 Wedge</h2>
      <p>
        Premium spin control, soft feel, and tour-grade performance.
        Perfect for dialing in your short game.
      </p>

      <p className="price">$169.99</p>
    </div>
  );
}

