module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    color: {
      primary: '#030303',
      secondary: '#606060',
      focus: '#065fd4',
      info: '#2196f3',
    },
    screens: {
      sm: '510px',
      md: '900px',
      lg: '1045px',
      xl: '2000px',
      '2xl': '2300px',
    },
    extend: {
      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fill, minmax(16rem, 1fr))',
      },
    },
  },
  plugins: [],
}

// Theme Notes:

//335 main video column max-width

//510 main video columns 1 -> 2

//600 main margins 0 -> 1

//655 search bar appears

//810 Left nav appears

// 900 main columns 2 -> 3

// 1045 main columns 3 -> 4

// 1330 Left nav expands

// 2000 main columns 4 -> 5

// 2300 main columns 5 -> 6

// 2550 main max width

/*
Theme Notes:

.grid-container--fill {
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
}

--ytd-rich-grid-items-per-row: 4;
--ytd-rich-grid-posts-per-row: 3;
--ytd-rich-grid-slim-items-per-row: 6;
--ytd-rich-grid-game-cards-per-row: 6;
--ytd-rich-grid-item-margin: 16px;
--ytd-rich-grid-item-min-width: 320px;
--ytd-rich-grid-item-max-width: 360px;
--ytd-rich-grid-mini-item-min-width: 240px;
--ytd-rich-grid-mini-item-max-width: 320px;
--ytd-rich-grid-slim-item-max-width: 220px; 

"Roboto", "Noto", sans-serif;




*/
