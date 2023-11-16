import { ListItem } from "./ListItem/ListItem";

interface ImgUrl {
  url_570xN: string,
}

export interface Item {
  listing_id:number,
  url:string,
  MainImage: ImgUrl,
  title:string,
  currency_code:string,
  price:string,
  quantity:number
}

interface ListItemsProps{
  items: Item[]
}

export const Listing = ({ items }: ListItemsProps) => {
  return (
    <div className="item-list">
      {items.map(item => <ListItem key={item.listing_id} {...item}/>)}
    </div>
  )
}
