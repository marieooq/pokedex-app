import React from 'react'

//utils
import convertIntoThreeDigit from "../utils/convertIntoThreeDigit"

const Card = ({ list }) => {
    //generate type lists
    const generateTypeList = (typeList) => {
        const lists = typeList.map((val, index) => <span className='type-list' key={index}>{val}</span>)

        return lists;
    }


    return (
      <div className="card">
        <div className="card-inner">
          <div className="card-profile-photo">
            <img
              src={`${
                process.env.PUBLIC_URL
              }/thumbnails/${convertIntoThreeDigit(list.id)}.png`}
              alt="profile"
            />
          </div>
          <div className="card-profile-info">
            <div className="card-profile-name">{`Name: ${list.name.english}`}</div>
            <div className="card-profile-type">
              Type: {generateTypeList(list.type)}
            </div>
          </div>
        </div>
      </div>
    );
}

export default Card
