import React, { useState } from "react";
import "./MovieRow.css";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export default ({title, itens}) => {

	const [scrollX, setScrollX] = useState(-600);


	

	const handleLeftArrow = () => {


		let x = scrollX + Math.round(window.innerWidth / 4);
		if (x > 0) {

			let listW = itens.results.length * 200;
			x = (window.innerWidth - listW) - 60;

		}

		setScrollX(x);
		




	}

	const handleRightArrow = () => {

		let x = scrollX - Math.round(window.innerWidth / 2);
		let listW = itens.results.length * 200;
		if ((window.innerWidth - listW) > x) {

			// x = (window.innerWidth - listW) - 60;
			x = 0

		}

		setScrollX(x);




	}




	return (

			<div className="movieRow">

			<div className = "movieRow-left" onClick = {handleLeftArrow}>

				<ArrowBackIosIcon style = {{fontSize: 50}}/>

			</div>

			<div className = "movieRow-right" onClick = {handleRightArrow}>

				<ArrowForwardIosIcon style = {{fontSize: 50}}/>

			</div>
				
				<h2>{title} </h2>
				<div className =  "movieRow-listarea">

					<div  className="movieRow-list" style = {{

						marginLeft: scrollX,
						width: itens.results.length * 200

					}}>

						{itens.results.length > 0 && itens.results.map((item, key)=>(
							<div className = "movieRow-item">
								<img  src = {"https://image.tmdb.org/t/p/w300"+item.poster_path} alt = {item.original_title}/>
							</div>)
						)}
					</div>

				</div>

			</div>



		);


}
