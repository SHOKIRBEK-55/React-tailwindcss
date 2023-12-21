import React from "react";
import Logo1 from './img/logo1.svg';
export default class Start extends React.Component {

render(){
 return (
  <div className="pl-[70px] flex items-center gap-[7rem] mt-[-45px]">
   <div className="flex flex-col gap-[20px]">
<p className="text-[20px] text-[#FF5C00]">How it works</p>
<h1 className="text-[40px]  font-[Oswald] font-[400]">Start find a job you love <br />
with us easily</h1>

<div className="bg-[#F5F7FF] rounded-xl flex items-center gap-[3rem]  w-[420px] h-[50px]">
<p className="w-[30px] ml-[20px] h-[30px] flex items-center justify-center rounded bg-[#F3E0FF]">1</p>
<p>Complete Profile </p>
<svg className="ml-[120px]" width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.243416 1.66634L7.76094 9.68995C8.15766 10.1033 8.85646 10.1033 9.23422 9.68995L16.6951 1.72271C17.0728 1.30931 17.1295 0.651574 16.6951 0.257037C16.2795 -0.118743 15.6562 -0.0623876 15.2785 0.351017L8.7809 7.28478C8.62978 7.43512 8.40317 7.43512 8.25203 7.28478L1.73559 0.332226C1.39566 -0.0435539 0.791174 -0.118784 0.375631 0.200627C-0.0587635 0.538792 -0.134386 1.27163 0.243481 1.6663L0.243416 1.66634Z" fill="#4238AF"/>
</svg>
</div>

<div className="bg-[#F5F7FF] w-[420px] h-[142px] flex flex-col pt-[20px] rounded-xl">
<div className="flex  gap-[3rem]"> <p className="w-[30px] ml-[20px] h-[30px] flex items-center justify-center rounded bg-[#F3E0FF]">2</p>
 <p className="mt-[3px]">Complete Profile </p>
 <svg className="mt-[10px] ml-[120px]" width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.7566 8.33366L9.23906 0.310045C8.84234 -0.10335 8.14354 -0.10335 7.76578 0.310045L0.304918 8.27729C-0.0728138 8.69069 -0.129479 9.34843 0.304918 9.74296C0.720459 10.1187 1.34381 10.0624 1.72154 9.64898L8.2191 2.71522C8.37022 2.56488 8.59683 2.56488 8.74797 2.71522L15.2644 9.66777C15.6043 10.0436 16.2088 10.1188 16.6244 9.79937C17.0588 9.46121 17.1344 8.72837 16.7565 8.3337L16.7566 8.33366Z" fill="#4238AF"/>
</svg>
</div>

<p className="text-[13px] p-[12px] text-[gray] pl-[22px]"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
 eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
  Ut enim ad minim veniam, quis nostrud exercitation.</p>

</div>

<div className="bg-[#F5F7FF] rounded-xl flex items-center gap-[3rem]  w-[420px] h-[50px]">
<p className="w-[30px] text-[red] ml-[20px] h-[30px] flex items-center justify-center rounded bg-[#bacd78]">2</p>
<p>Apply Job </p>
<svg className="ml-[168px]" width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.243416 1.66634L7.76094 9.68995C8.15766 10.1033 8.85646 10.1033 9.23422 9.68995L16.6951 1.72271C17.0728 1.30931 17.1295 0.651574 16.6951 0.257037C16.2795 -0.118743 15.6562 -0.0623876 15.2785 0.351017L8.7809 7.28478C8.62978 7.43512 8.40317 7.43512 8.25203 7.28478L1.73559 0.332226C1.39566 -0.0435539 0.791174 -0.118784 0.375631 0.200627C-0.0587635 0.538792 -0.134386 1.27163 0.243481 1.6663L0.243416 1.66634Z" fill="#4238AF"/>
</svg>
</div>


</div>

<div className="mt-[70px] ">
<img src={Logo1}  alt="" />
 </div>

  </div>
 )
}

}