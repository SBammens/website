import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled components for header elements
const HeaderContainer = styled.header`
  background-color: #222; /* Blackish background */
  color: white;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

const TitleDiv = styled.div`
  /* Add any specific styles for the title */
  position: relative;
  width:100%;
`;

const Navigation = styled.nav`
  display: inline-block;
  
`;

const NavigationList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavigationItem = styled.li`
  display: inline-block;
  margin-left: 20px;

`;

const NavLink = styled(Link)`
  color: white;
  transition: all 0.4s ease-in-out;
  text-decoration: none;

  display: block;
  position: relative;
  padding: 0.2em 0;

  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.1em;
    background-color: let(--c-yellow);
    transition: opacity 300ms, transform 300ms;

    opacity 1;
    transform: translate3d(-100%, 0, 0);
  };

  &:hover::after, &:focus::after {
    transform: translate3d(0, 0, 0);
  };

  &:hover {
    color: let(--c-yellow);
  };
`;

const Canvas = styled.canvas`
  position: relative;
  top: 0;
  left: 0;
`;

const Header = () => {
  
  const handleResize = () => {
    // Reload the page when the window is resized
    window.location.reload();
  };

  useEffect(() => {
    // Attach the resize event listener
    window.addEventListener("resize", handleResize);

    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    // Get the dimensions of the parent div
    const parentDiv = document.getElementById("textPartArea");
    const parentDivWidth = parentDiv.offsetWidth;
    const parentDivHeight = parentDiv.offsetHeight;


    // window.addEventListener("resize", function(){
    //   const parentDivWidth = parentDiv.offsetWidth;
    //   const parentDivHeight = parentDiv.offsetHeight;
    //   canvas.width = parentDivWidth;
    //   canvas.height = parentDivHeight;
      
    //   console.log("Resize: ", canvasWidth, canvasHeight);
      
    //   init(); // Recalculate particle positions
    // });

    // Set canvas dimensions to match the parent div
    canvas.width = parentDivWidth;
    canvas.height = parentDivHeight;

    //handle mouse object to store mouse co ordinates
    const mouse = {
        x: null,
        y: null,
        raduis: 200
    }

    window.addEventListener('mousemove', function(event){
        mouse.x = event.x;
        mouse.y = event.y;
    })
    ctx.fillStyle = 'white';
    ctx.font = "4vmin Montserrat";
    ctx.fillText("Samplications",0,62);

    let particleArray = [];
    let adjustY = 0;

    // blueprint to create particles
    class Particle {
        constructor(x,y){
            this.x = x ;
            this.y = y;
            this.size = 1.2;
            this.baseX = this.x;
            this.baseY = this.y;
            this.density = (Math.random() * 15) + 5;
        }
        draw(){
            ctx.fillStyle = 'white';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
        }
        update(){
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            let forceDirectionX = dx / distance;
            let forceDirectionY = dy / distance;
            let maxDistance = mouse.raduis ; 
            let force = (maxDistance - distance ) / maxDistance; 
            let directionX = forceDirectionX * force * this.density;
            let directionY = forceDirectionY * force * this.density;
            if(distance < mouse.raduis){
                this.x -= directionX;
                this.y -= directionY;
            }else{
                // return speed adjustment
                if(this.x !== this.baseX){
                    let dx = this.x - this.baseX;
                    this.x -= dx/5;
                }if(this.y !== this.baseY){
                    let dy = this.y - this.baseY;
                    this.y -= dy/5;
                }
            }
        }
    }


    //function init to fill particle array
    function init(){
        particleArray = [];
        const textCoordinates = ctx.getImageData(0,0,canvasWidth,canvasHeight);
        let adjustX = (canvasWidth*0.85 - ctx.measureText("Samplications").width) / 2;

        for (let y = 0, y2 = textCoordinates.height; y < y2; y++) {
        for (let x = 0, x2 = textCoordinates.width; x < x2; x++) {
          if (textCoordinates.data[(y * 4 * textCoordinates.width) + (x * 4) + 4] > 128) {
            let positionX = x * 2.2 + adjustX; // Centering the particles
            let positionY = y * 2.2 + adjustY;
            particleArray.push(new Particle(positionX, positionY));
          }
        }
      }
    }
    init();

    // animation loop
    function animate(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for(let i=0; i< particleArray.length ; i++){
            particleArray[i].draw();
            particleArray[i].update();
        }
        requestAnimationFrame(animate);
    }
    animate();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <HeaderContainer>

      {/* <Logo>
        <img loading='lazy' src={logo} alt="Samplications logo" width="100" height="100" />
      </Logo> */}
      <TitleDiv id="textPartArea">
        {/* <h1>Samplications</h1> */}
            <Canvas id="myCanvas">
                Your browser does not support the canvas element.
            </Canvas>
        
      </TitleDiv>
      <Navigation>
        <NavigationList>
          <NavigationItem>
            <NavLink to="/">Home</NavLink>
          </NavigationItem>
          {/* <NavigationItem>
            <NavLink to="/About">About</NavLink>
          </NavigationItem> */}
          <NavigationItem>
            <NavLink to="/Services">Services</NavLink>
          </NavigationItem>
          <NavigationItem>
            <NavLink to="/Contact">Contact</NavLink>
          </NavigationItem>
        </NavigationList>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header
