import React, {Fragment} from 'react';

const HexTile = (props) => {

  const decideClickAction = () => {
    // If there's a selected monster already, and I click on 
    // another monster on my team, switch the selection to
    // the new one I clicked on.
    
    // If there's a selected monster already, attack the one I clicked on.
    // Code not written yet.

    // If there's no selected monster, select it.
    if (!props.selectedMonster) {
      props.selectMonster(props.monsterId ? props.monsterId : 0, props.id)
    }

    // If there's a monster selected and I clicked on a tile that doesn't
    //    have a monster, move it to that tile.
    if (props.selectedMonster && !props.monsterId) {
      props.moveMonster(props.id)
    }
  }

  const hoverCard = (event) => {
    console.log("hello")
    return (
      <div className="hoverCard">
        Hello!
      </div>
    )
  }

  return (
    <React.Fragment>
      <li
        className="hex"
        onClick={() => props.decideClickAction(props.id, props.monsterId ? props.monsterId : 0)}
      >
        <div className="hexIn">
          <a className="hexLink" href="#">
            <img
              className="tile-background"
              src={props.image}
              alt=""
            />
            <h1>Placeholder</h1>
            {props.monsterId
              ?
              <img
                className={`sprite-${props.direction}`}
                src={props.findMonster(props.monsterId).sprite_front}
                alt={props.findMonster(props.monsterId).name}
                onMouseEnter={() => props.hover(props.monsterId)}
                onMouseLeave={props.unhover}
              />
              :
            null}
            <p>Placeholder</p>
          </a>
        </div>
      </li>
    </React.Fragment>
  )

}

export default HexTile;
