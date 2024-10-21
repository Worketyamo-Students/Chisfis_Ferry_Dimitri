import HappeningCities from "./HappeninCities"

const BenefitsComponent = () => {
  return (
    <div className="p-[5rem]">
        <div className="flex justify-center gap-[8rem]">
        <div><img src="../../src/assets/Benefit.svg" alt="Benefit_image" /></div>
        <HappeningCities/>
        </div>
    </div>
  )
}

export default BenefitsComponent