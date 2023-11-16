import { Item } from "../Listing";

// Определяем уровень остатка товаров
function defineLevel(quantity: number) {
  if (quantity < 10) return 'low';
  if (quantity < 20) return 'medium';
  return 'high';
}

// Определяем цену
function definePrice(price : string, currency : string) {
  switch (currency) {
    case 'USD':
      return `$${price}`;
    case 'EUR':
      return `€${price}`;
    default:
      return `${price} ${currency}`;
  }
}

// Форматируем название товара
function formatTitle(title: string) {
  return title.length >= 50 ? `${title.slice(0, 49)}...` : title;
}

export const ListItem = ({ url, MainImage, title, currency_code, price, quantity } : Item) => {
  const level = defineLevel(quantity);
  const priceText = definePrice(price, currency_code);

  return (
    <div className="item">
        <div className="item-image">
          <a href={url}>
            <img src={MainImage.url_570xN} alt=""/>
          </a>
        </div>
        <div className="item-details">
          <p className="item-title">{formatTitle(title)}</p>
          <div className="item__footer">
            <p className="item-price">{priceText}</p>
            <p className={`item-quantity level-${level}`}>{quantity} left</p>
          </div>
        </div>
      </div>
  )
}
