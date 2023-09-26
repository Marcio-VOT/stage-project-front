'use client'
import useAllData from '@/hooks/useAllData'
import { Accordion, AccordionItem } from '@nextui-org/react'

export default function Home() {
  const { allData } = useAllData()
  const itemClasses = {
    base: 'py-0 w-full rounded-none',
    title: 'font-normal text-2xl',
    trigger:
      'py-0 data-[hover=true]:bg-default-100 rounded-none h-14 flex items-center',
    indicator: 'text-medium',
    content: 'text-small',
  }

  return (
    <main className="w-full ">
      <h1 className="text-4xl font-medium ps-2 pb-3">Areas</h1>
      <Accordion
        itemClasses={itemClasses}
        className="flex flex-col gap-y-4 py-4 w-full rounded-none "
        variant="shadow"
        disableAnimation
        key={'areas'}
      >
        {allData &&
          allData.map((data, index) => {
            return (
              <AccordionItem
                key={index + data.name}
                aria-label={'Area'}
                subtitle={'Process quantity: ' + data._count.Process}
                title={data.name}
              >
                <h1 className="text-2xl font-medium ps-2 pb-3">Processes</h1>
                <Accordion
                  key={'processes'}
                  itemClasses={itemClasses}
                  className="flex flex-col gap-4 py-4 w-full rounded-none "
                  variant="shadow"
                  disableAnimation
                >
                  {data.Process &&
                    data.Process.map((process, index) => (
                      <AccordionItem
                        key={process.name + index}
                        aria-label={'Process'}
                        subtitle={
                          process.Stack.length +
                          ' Stacks & ' +
                          process.SubProcess.length +
                          ' Subprocesses'
                        }
                        title={process.name}
                      >
                        <div>
                          {process.Stack.length >= 1 && 'Satcks = | '}
                          {process.Stack.length >= 1 &&
                            process.Stack.map((stack) => (
                              <>{stack.name + ' | '}</>
                            ))}
                        </div>
                      </AccordionItem>
                    ))}
                </Accordion>
              </AccordionItem>
            )
          })}
      </Accordion>
    </main>
  )
}
