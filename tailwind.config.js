/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    './index.html',],
  theme: {
    extend: {   
      backgroundImage: {
        'globe-pattern': "url(https://staging3.croptrak.com/wp-content/uploads/2023/08/bg-about.svg)",
        'contact-pattern': "url(https://croptrak.com/wp-content/uploads/2023/08/bg-contact.svg)",
      },
      backgroundPosition: {
        'mobile-position': 'center top 2%',
        'about-mobile-position': 'left 15vw top 0px',
        'about-position': 'left 15vw top 70px',
        'house-posit': 'left 5px',
        'contact-posit': 'left top 1px',
      },
      colors:{
      'primary-white': '#FEFEFE',
      'primary-sea': '#769FCD',
      'primary-sky': '#B9D7EA',
      'primary-cloud': '#D6E6F2',
    },
      fontFamily: {
        'primary-sans': ['IBM Plex Sans', 'sans-serif'],
        'primary-serif': ['IBM Plex Serif', 'serif'],
      },
      fontSize: {
        'custom':'1.3rem',
        '70px': '70px',
        '62px': '62px',
        '56px' : '56px',
        '40px': '40px',
        '19px': '19px',
        '17px': '17px',
        '25px': '25px',
        '32px': '32px',
        '28px': '28px',
      },
      borderWidth:{
        '3px': '3px',
        '6': '6px',
        '10': '10px',
      },
      lineHeight: {
        '130%': '130%',
        '150%': '150%',
        '62px': '62px',
        '36px': '36px',
        '31.2px': '31.2px',
        '23px': '23px',
        'extra-loose': '2.5',
        '12': '3rem',
      },
      letterSpacing: {
        'smallcustom': '0.01rem',
        'wide' : '0.03rem',
        'widecustom' : '0.03125rem',
        'giant': '0.045rem',
        'custom': '0.02rem',
        '2xl': '0.05rem',
        '3xl': '0.062rem'
      },
      spacing: {
        'arrowspc': 'calc(100% - 150px)',
        'linecustom': '2.25rem',
        '-50%': '-50%',
        '46%': '46%',
        '40%': '40%',
        '35%': '28%',
        'half': '50%',
        '20%': '20%',
        '18%': '18%',
        '16%': '16%',
        '14%': '14%',
        '12.5%': '12.5%',
        '10%': '10%',
        '8%': '8%',
        '7%': '7%',
        '6.25%': '6.25%',
        '5%': '5%',
        '4%': '4%',
        '1.5%': '1.5%',
        '32rem': '32rem',
        '23': '5.75rem',
        '17': '4.2rem',
        '13': '3.25rem',
        '1.05rem': '1.05rem',
        '468px': '468px',
        '340px': '340px',
        '300px': '300px',
        '170px': '170px',
        '145px': '145px',
        '130px': '130px',
        '102px': '102px',
        '93px': '93px',
        '84px': '84px',
        '75px': '75px',
        '73px': '73px',
        '71px': '71px',
        '69px': '69px',
        '62px': '62px',
        '60px': '60px',
        '56px': '56px',
        '50px': '50px',
        '38px': '38px',
        '30px': '30px',
        '25px': '25px',
        '23px': '23px',
        '18px': '18px',
        '14px': '14px',
        '10px': '10px',
        '5px': '5px',
        '3px': '3px',
        '2px': '2px',
      },
      rotate:{
        '45': '-45deg'
      },
      maxWidth: {
        '1340px': '1340px',
        '1240px': '1240px',
        '1102px': '976.5px',
        '938px': '938px',
        '655px': '655px',
        '586px': '586px',
        '550px': '550px',
        '97%' : '97%',
        '95%' : '95%', 
        '92%': '92%',
        'custom': '90.17%',
        '90%' : '90%',
        '82.52%': '82.52%',
        '86%': '86%',
        '85%' : '85%',
        '80%' : '80%',
        '76%': '76%',
        '75%' : '75%',
        '74%': '74%',
        '70%': '77%',
        '60%': '60%',
        '53%': '53%',
        '45%': '45%',
        '40%': '40%',
        '1/2': '50%',
        'smallcustom': '21rem',
        '71px': '71px',
        '91px': '91px',
        '100px': '100px',
        '115px': '115px',
        '130px': '130px',
        '133px': '133px',
        '180px': '180px',
        '210px': '210px',
        '230px': '230px',
        '240px': '240px',
        '265px': '265px',
        '300px': '300px',
        '303px': '303px',
        '595px': '595px',
        '611px': '611px',
      },
      width: {
        '93%' : '93%',
        '90%' : '90%',
        '815.844px': '815.844px',
        '72.27%': '850.812px',
        '72.07%': '72.07%',
        '400px': '400px',
        '360px': '360px',
        '80%' : '80%',
        'text' : '70%',
        'textl': '73%',
        '200px': '200px',
      },
      height: {
        '526px': '526px',
        '360px': '360px',
        '108px': '108px',
        '155px': '155px',
      },
      minHeight:{
        '100px': '100px',
        '140px': '140px',
      },
      minWidth:{
        '1400px': '1400px',
        '85%' : '85%',
        '300px': '300px',
        '1/4': '25%',
      },
      screens: {
        'tablet': '768px',
        'laptop': '980px',
        'desktop': '1400px',
      },
      
    },
  },
  plugins: [],
}