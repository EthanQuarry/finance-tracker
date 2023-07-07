// import { Form } from "react-hook-form";
// import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "../ui/form";
// import { Input } from "../ui/input";
// import InputTitle from "../ui/inputTitle";
// import { set } from "date-fns";
// import { number } from "zod";
// import { useMultipleStepForm } from "@/lib/hooks/useMultipleStepForm";

// export default function ImportantDetailsForm() {
//     const [ monthlyIncome, setMonthlyIncome ] = React.useState(0);  
//     const { 
//         currentStep, 
//         nextStep,
//         previousStep,
//         handleChange,
//         handleSubmit,
//         formData
//     } = useMultipleStepForm([<div>hello <FormField
//                 control={...}
//                 name="..."
//                 render={() => (
//                     <div>
//                         <FormItem>
//                         <FormLabel />
//                         <FormControl>
//                             <InputTitle>Monthy Income</InputTitle>
//                             <Input 
//                                 type='number'
//                                 name="monthlyIncome"
//                                 placeholder="Enter your monthly income"
//                                 onChange={(e) => setMonthlyIncome(e.target.value)}
//                             /> 
//                         </FormControl>
//                         <FormDescription />
//                         <FormMessage />
//                     </FormItem>
//                     </div>
                    
//                 )}
//             /></div>,
//             <>
//             <FormField
//                 control={form.control}
//                 name = "monthlyIncome"
//                 render={() => (
//                     <FormItem>
//                         <FormLabel />
//                         <FormControl>
//                             <InputTitle>Monthy Income</InputTitle>
//                             <Input 
//                                 type='number'
//                                 name="monthlyIncome"
//                                 placeholder="Enter your monthly income"
//                                 onChange={(e) => setMonthlyIncome(e.target.value)}
//                             /> 
//                         </FormControl>
//                         <FormDescription />
//                         <FormMessage />
//                     </FormItem>
//                 )}
//             />
//             </>
            
//     ]);

//     return (
//         <>        
//         <Form {...form}>
//             { currentStep}
//         </Form>
//         </>

//     )
// }