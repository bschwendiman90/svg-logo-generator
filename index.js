const { Circle, Square, Triangle } = require('./lib/shapes.js');
const fs = require('fs');
const inquirer = require('inquirer')

// Validate if the input is a valid color keyword
function isValidColorKeyword(input) {
    const colorKeywords = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown', 'black', 'white'];
    return colorKeywords.includes(input.toLowerCase());
  }
  
  // Validate if the input is a valid hexadecimal color
  function isValidHexColor(input) {
    return /^#([0-9A-F]{3}){1,2}$/i.test(input);
  }
  
  // Validate if the input is a valid shape
  function isValidShape(input) {
    const validShapes = ['circle', 'square', 'triangle'];
    return validShapes.includes(input.toLowerCase());
  }
  

// Create SVG string for a Circle
function createCircleSVG(x, y, color, radius, initials, textColor) {
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
              <circle cx="${x}" cy="${y}" r="${radius}" fill="${color}" />
              <text x="${x}" y="${y}" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">${initials}</text>
            </svg>`;
  }
  
  // Create SVG string for a Square
  function createSquareSVG(x, y, color, sideLength, initials, textColor) {
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
              <rect x="${x}" y="${y}" width="${sideLength}" height="${sideLength}" fill="${color}" />
              <text x="${x + sideLength / 2}" y="${y + sideLength / 2}" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">${initials}</text>
            </svg>`;
  }
  
  // Create SVG string for a Triangle
  function createTriangleSVG(points, color, initials, textColor) {
    const pointsString = points.map(point => point.join(",")).join(" ");
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
              <polygon points="${pointsString}" fill="${color}" />
              <text x="150" y="100" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">${initials}</text>
            </svg>`;
  }
  // Create a prompt function
  async function promptUser() {
    // Prompt for company initials
    const initialsAnswer = await inquirer.prompt({
      type: 'input',
      name: 'initials',
      message: 'What are the company initials?',
      validate: function (input) {
        // Check if input length is exactly 3 characters
        if (input.length === 3) {
          return true;
        } else {
          return 'Please enter exactly three characters.';
        }
      }
    });
  
    // Prompt for color
    const colorAnswer = await inquirer.prompt({
      type: 'input',
      name: 'color',
      message: 'Enter a color for text (keyword or hexadecimal):',
      validate: function (input) {
        // Check if input is a valid color keyword or hexadecimal color
        if (isValidColorKeyword(input) || isValidHexColor(input)) {
          return true;
        } else {
          return 'Please enter a valid color keyword or hexadecimal color.';
        }
      }
    });
  
    // Prompt for shape
    const shapeAnswer = await inquirer.prompt({
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['Circle', 'Square', 'Triangle']
    });
  
    // Prompt for shape color
    const shapeColorAnswer = await inquirer.prompt({
      type: 'input',
      name: 'shapeColor',
      message: 'Enter a color for the shape (keyword or hexadecimal):',
      validate: function (input) {
        // Check if input is a valid color keyword or hexadecimal color
        if (isValidColorKeyword(input) || isValidHexColor(input)) {
          return true;
        } else {
          return 'Please enter a valid color keyword or hexadecimal color.';
        }
      }
    });
  
    // Based on the selected shape, create an instance and render it
    let shape;
    switch (shapeAnswer.shape.toLowerCase()) {
      case 'circle':
        shape = new Circle(/* Provide arguments */);
        break;
      case 'square':
        shape = new Square(/* Provide arguments */);
        break;
      case 'triangle':
        shape = new Triangle(/* Provide arguments */);
        break;
    }
    
    fs.writeFileSync(../logo.svg, svgString);
  
    console.log(`SVG file "${fileName}" created successfully.`);
  
    // Log the company initials, text color, shape, and shape color
    console.log('Company initials:', initialsAnswer.initials);
    console.log('Text color:', colorAnswer.color);
    console.log('Shape:', shapeAnswer.shape);
    console.log('Shape color:', shapeColorAnswer.shapeColor);
  }
  
  // Call the prompt function
  promptUser();