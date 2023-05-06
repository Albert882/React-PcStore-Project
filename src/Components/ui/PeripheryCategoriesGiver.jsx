import React from 'react'
import {AiOutlineDown, AiOutlineUp} from 'react-icons/ai'
import PeripheryGiveCategoriesGraphTable from '../PeripheryGiveCategories/PeripheryGiveCategoriesGraphTable'
import PeripheryGiveCategoriesHeadPhone from '../PeripheryGiveCategories/PeripheryGiveCategoriesHeadPhone'
import PeripheryGiveCategoriesKeyboard from '../PeripheryGiveCategories/PeripheryGiveCategoriesKeyboard'
import PeripheryGiveCategoriesMicrophone from '../PeripheryGiveCategories/PeripheryGiveCategoriesMicrophone'
import PeripheryGiveCategoriesMouse from '../PeripheryGiveCategories/PeripheryGiveCategoriesMouse'
import PeripheryGiveCategoriesAudioSpeaker from '../PeripheryGiveCategories/PeripheryGiveCategoriesAudioSpeaker'
import PeripheryGiveCategoriesWebcamera from '../PeripheryGiveCategories/PeripheryGiveCategoriesWebCamera'
import PeripheryGiveCategoriesRug from '../PeripheryGiveCategories/PeripheryGiveCategoriesRug'



export default function PeripheryCategoriesGiver({info, handleOpenSizeInterface,giveSize, handleOpenPriceInterface, givePrice, handleOpenBrandInterface, giveBrand, brands, setBrands, handleBrandsChange,uniqueFuncBrands, uniqueBrands}) {
  return (
    <>
        {
            info === 'Rug' && <PeripheryGiveCategoriesRug handleOpenSizeInterface={handleOpenSizeInterface} giveSize={giveSize} handleOpenPriceInterface={handleOpenPriceInterface} givePrice={givePrice} handleOpenBrandInterface={handleOpenBrandInterface} giveBrand={giveBrand} brands={brands} uniqueBrands={uniqueBrands} setBrands={setBrands} handleBrandsChange={handleBrandsChange} uniqueFuncBrands={uniqueFuncBrands} />
        }
        {
            info === 'GraphTable' && <PeripheryGiveCategoriesGraphTable handleOpenSizeInterface={handleOpenSizeInterface} giveSize={giveSize} handleOpenPriceInterface={handleOpenPriceInterface} givePrice={givePrice} handleOpenBrandInterface={handleOpenBrandInterface} giveBrand={giveBrand} handleBrandsChange={handleBrandsChange} uniqueFuncBrands={uniqueFuncBrands}/>
        }
        {
            info === 'HeadPhone' && <PeripheryGiveCategoriesHeadPhone handleOpenSizeInterface={handleOpenSizeInterface} giveSize={giveSize} handleOpenPriceInterface={handleOpenPriceInterface} givePrice={givePrice} handleOpenBrandInterface={handleOpenBrandInterface} giveBrand={giveBrand} handleBrandsChange={handleBrandsChange} uniqueFuncBrands={uniqueFuncBrands}/>
        }
        {
            info === 'Keyboard' && <PeripheryGiveCategoriesKeyboard handleOpenSizeInterface={handleOpenSizeInterface} giveSize={giveSize} handleOpenPriceInterface={handleOpenPriceInterface} givePrice={givePrice} handleOpenBrandInterface={handleOpenBrandInterface} giveBrand={giveBrand} handleBrandsChange={handleBrandsChange} uniqueFuncBrands={uniqueFuncBrands}/>
        }
        {
            info === 'Microphone' && <PeripheryGiveCategoriesMicrophone handleOpenSizeInterface={handleOpenSizeInterface} giveSize={giveSize} handleOpenPriceInterface={handleOpenPriceInterface} givePrice={givePrice} handleOpenBrandInterface={handleOpenBrandInterface} giveBrand={giveBrand} handleBrandsChange={handleBrandsChange} uniqueFuncBrands={uniqueFuncBrands}/>
        }
        {
            info === 'Mouse' && <PeripheryGiveCategoriesMouse handleOpenSizeInterface={handleOpenSizeInterface} giveSize={giveSize} handleOpenPriceInterface={handleOpenPriceInterface} givePrice={givePrice} handleOpenBrandInterface={handleOpenBrandInterface} giveBrand={giveBrand} handleBrandsChange={handleBrandsChange} uniqueFuncBrands={uniqueFuncBrands}/>
        }
        {
            info === 'AudioSpeaker' && <PeripheryGiveCategoriesAudioSpeaker handleOpenSizeInterface={handleOpenSizeInterface} giveSize={giveSize} handleOpenPriceInterface={handleOpenPriceInterface} givePrice={givePrice} handleOpenBrandInterface={handleOpenBrandInterface} giveBrand={giveBrand} handleBrandsChange={handleBrandsChange} uniqueFuncBrands={uniqueFuncBrands}/>
        }
        {
            info === 'WebCamera' && <PeripheryGiveCategoriesWebcamera handleOpenSizeInterface={handleOpenSizeInterface} giveSize={giveSize} handleOpenPriceInterface={handleOpenPriceInterface} givePrice={givePrice} handleOpenBrandInterface={handleOpenBrandInterface} giveBrand={giveBrand} handleBrandsChange={handleBrandsChange} uniqueFuncBrands={uniqueFuncBrands}/>
        }
    </>
    )
}
