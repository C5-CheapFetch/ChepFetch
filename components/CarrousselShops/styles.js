import styled from "styled-components";

export const Container = styled.section `
  background-color: #ffff;
  text-align: center;
  padding-top: 1em;
`;

export const ImagesContainer = styled.div `
  border: 1px solid red;
  max-width: 100vw;
  height: 1 em;
  display: flex;
  align-content: center;
  justify-content: center;
  /* justify-content: center; */
`;

export const StoreImage = styled.img `
  /* border: 1px solid red; */
  width: 10%;
`;
// body {
// 	align-items: center;
// 	background: #E3E3E3;
// 	display: flex;
// 	height: 100vh;
// 	justify-content: center;
// }

// @mixin white-gradient {
// 	background: linear-gradient(to right,  rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);
// }

// $animationSpeed: 40s;

// // Animation
// @keyframes scroll {
// 	0% { transform: translateX(0); }
// 	100% { transform: translateX(calc(-250px * 7))}
// }

// // Styling
// .slider {
// 	background: white;
// 	box-shadow: 0 10px 20px -5px rgba(0, 0, 0, .125);
// 	height: 100px;
// 	margin: auto;
// 	overflow:hidden;
// 	position: relative;
// 	width: 960px;

// 	&::before,
// 	&::after {
// 		@include white-gradient;
// 		content: "";
// 		height: 100px;
// 		position: absolute;
// 		width: 200px;
// 		z-index: 2;
// 	}

// 	&::after {
// 		right: 0;
// 		top: 0;
// 		transform: rotateZ(180deg);
// 	}

// 	&::before {
// 		left: 0;
// 		top: 0;
// 	}

// 	.slide-track {
// 		animation: scroll $animationSpeed linear infinite;
// 		display: flex;
// 		width: calc(250px * 14);
// 	}

// 	.slide {
// 		height: 100px;
// 		width: 250px;
// 	}
// }