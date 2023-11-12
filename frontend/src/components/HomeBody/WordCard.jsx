import React from 'react'
import NounSection from './NounSection'
import VerbSection from './VerbSection'

const WordCard = ({tableData}) => {
  return (
    <div className='flex justify-center my-5'>
            <div className='flex justify-center my-5 '>
              <div className='w-[320px] bg-white rounded-2xl flex flex-col items-center gap-5 p-4 shadow-xl'>
                <div className='text-center'>
                  <h3 className='text-xl font-semibold'>{tableData.word}</h3>
                </div>
                {/* noun section */}
                <div className=' w-[300px] bg-bluebg  rounded-2xl p-3 mb-4'>
                  <div className='flex justify-between mb-3'>
                    <div className='text-lg font-semibold'>
                      <h3>Noun</h3>
                    </div>
                    <NounSection heading="M" text={tableData.nounMeaning} />
                  </div>
                  <div className='flex justify-between '>
                    <NounSection heading="singular" text={tableData.nounSingular} />
                    <NounSection heading="plural" text={tableData.nounPlural} />
                  </div>
                </div>
                {/* verb section */}
                <div className=' w-[300px] bg-bluebg  rounded-2xl p-3'>
                  <div className='flex justify-between mb-3'>
                    <div className='text-lg font-semibold'>
                      <h3>Verb</h3>
                    </div>
                  <VerbSection heading="M" text={tableData.verbMeaning}/>
                </div>
                <div className="grid grid-cols-2 grid-rows-7" style={{ gap: '20px 30px' }}>
                  <VerbSection heading="Singular" text={tableData.verbSingular}/>
                  <VerbSection heading="Plural" text={tableData.verbPlural}/>
                  <VerbSection heading="SP" text={tableData.sp}/>
                  <VerbSection heading="PC" text={tableData.pc}/>
                  <VerbSection heading="PP" text={tableData.pp}/>
                  <VerbSection heading="PPC" text={tableData.ppc}/>
                  <VerbSection heading="SPa" text={tableData.spa}/>
                  <VerbSection heading="PaC" text={tableData.pac}/>
                  <VerbSection heading="PaP" text={tableData.pap}/>
                  <VerbSection heading="PaPC" text={tableData.papc}/>
                  <VerbSection heading="SF" text={tableData.sf}/>
                  <VerbSection heading="FC" text={tableData.fc}/>
                  <VerbSection heading="FP" text={tableData.fp}/>
                  <VerbSection heading="FPC" text={tableData.fpc}/>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default WordCard