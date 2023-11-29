import { CDN_URL } from "../utils/constants";

const styleCard = {
    backgroundColor: '#f0f0f0'
};

const ResturantCards = (props)=>{
    const {resData} = props;

    const {
           name,
           cuisines,
           costForTwo,
           avgRating,
           cloudinaryImageId
          } = resData;
    
    return(
           <div className='res-card p-4 m-4 w-[300px] rounded-md bg-black-50 hover:bg-blue-200 sm:bg-yellow-100' style={styleCard}>
                  <img 
                  className='res-logo rounded-md w-[200px] h-[200px]'
                  src={CDN_URL+ resData.cloudinaryImageId} 
                  alt='dish photo'/>
                  <h3 className="font-bold">{name}</h3>
                  <h4>{cuisines.join(",")}</h4>
                  <h4>{costForTwo.split(' ')[0]} for Two</h4>
                  <h4>{avgRating}</h4>
           </div>
    )
};

export const withPromotioCard=(ResturantCards)=>{
       return (props)=>{
              return (
                     <div>
                            <label className="absolute bg-black text-white shadow-md">Promoted</label>
                            <ResturantCards {...props}/>
                     </div>
              )
       }

}
export default ResturantCards;