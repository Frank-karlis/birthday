"use client"
import React from "react"
import { useFormik } from "formik";
import * as yup from "yup";
import { TextField, Button, Dialog, DialogContent, DialogActions } from "@mui/material";
import { db } from "../lib/firebase";
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp,} from "firebase/firestore";

const rules = yup.object().shape({
    message: yup.string().required().min(3),
    name: yup.string().required().min(1),
  
})


export default function Greet() {
  const [messages, setMessages] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [submittedWish, setSubmittedWish] = React.useState(null);
    const [submitError, setSubmitError] = React.useState("");

React.useEffect(() => {
  const messagesQuery = query(
    collection(db, "birthdayMessages"),
    orderBy("createdAt", "desc")
  );

  return onSnapshot(messagesQuery, (snapshot) => {
    setMessages(
      snapshot.docs.map((document) => ({
        id: document.id,
        ...document.data(),
      }))
    );
  });
}, []);
const { values, handleSubmit, touched, errors, handleChange,handleBlur } = useFormik({
  initialValues: { message: "", name: "" },
  validationSchema: rules,

  onSubmit: async (values, { resetForm }) => {
  setSubmitError("");

  const wish = {
    name: values.name.trim(),
    message: values.message.trim(),
  };

  try {
    await addDoc(collection(db, "birthdayMessages"), {
      ...wish,
      createdAt: serverTimestamp(),
    });

    setSubmittedWish(wish);
    handleClickOpen();
    resetForm();
  } catch (error) {
    console.error("Could not save the wish:", error);
    setSubmitError(error.message);
  }
},
});
  

    return (
        <>
            <main className=" bg-[#F9E6A8] px-3 md:px-12 lg:px-16 py-12 min:h-screen md:min:h-screen">
                <section className=" w-[320px] md:w-full   flex justify-center ronded-lg p-6">
                    <form onSubmit={handleSubmit} className="w-full md:w-[380px] flex flex-col gap-4 border border-[#CC6F00] p-4">
                        <h1 className="text-black text-medium-500 "> Send Your good will message </h1>
                        <div className="mb-7">
                            <TextField
                                id="message"
                                fullWidth 
                                multiline
                                minRows={1}
                                label="Your Good will Message"
                                variant="outlined"
                                placeholder="message"
                                className="w-full"
                                value={values.message}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.message && errors.message ? <span className="text-xs text-red-500">{errors.message}</span> : null}
                        </div>
                        <div className="mb-3">
                            <TextField
                                type="string"
                                id="name"
                                label="What is Your name"
                                variant="outlined"
                                placeholder="name"
                                className="w-full"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.name && errors.name ? <span className="text-xs text-red-500">{errors.name}</span> : null}
                    </div>

                       <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            style={{ padding: 12 }}>SEND YOUR WISHES</Button>

                    </form>
                </section>



            </main>

            <Dialog open={open} onClose={handleClose}>
  <DialogContent className="flex justify-between items-center border-b border-gray-300 p-4 w-full">
 <p>Thank you, {submittedWish?.name}!</p>
<p>{submittedWish?.message}</p>
  </DialogContent>

  <DialogActions>
    {submitError && <p className="text-red-600">{submitError}</p>}
    <Button onClick={handleClose}>Close</Button>
  </DialogActions>
</Dialog>

</>


           
    );
}