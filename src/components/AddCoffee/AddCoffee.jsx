

export default function AddCoffee() {

    // const getValue = (form,name1) => {
    //     return form.name1.value
    //     const name = getValue(form, "Name");
    //     const chef = getValue(form, "Chef")
    //     const supplier = getValue(form, "Supplier")
    //     const taste = getValue(form, "Taste")
    //     const category = getValue(form, "Category")
    //     const details = getValue(form, "Details")
    //     const photo = getValue(form, "Photo")
    // }

    const handleAddCoffee = (e) => {
        e.preventDefault();
        console.log("Add Coffee");
        const form = e.target;

        const name = form.Name.value;
        const chef = form.Chef.value;
        const supplier = form.Supplier.value;
        const taste = form.Taste.value;
        const category = form.Category.value;
        const details = form.Details.value;
        const photo = form.Photo.value;
        
        // Output
        console.log(name)
        console.log(chef)
        console.log(supplier)
        console.log(taste)
        console.log(category)
        console.log(details)
        console.log(photo)

        // Reset form
        // form.reset();
    }
    return (
        <div>
            <div className="bg-[#F4F3F0] p-10 space-y-10">
                <h1 className="text-5xl">Add New Coffee</h1>
                <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
                </p>
                <form className="md:p-10" onSubmit={handleAddCoffee}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6">
                        <div className="flex flex-col items-start w-full gap-3">
                            <label>Name</label>
                            <input type="text" className="p-4 rounded-md w-full md:w-11/12  mr-0 " name="Name" placeholder="Name" />
                        </div>
                        <div className="flex flex-col items-start w-full gap-3">
                            <label>Chef</label>
                            <input type="text" className="p-4 rounded-md w-full md:w-11/12  mr-0" name="Chef" placeholder="Chef" />
                        </div>
                        <div className="flex flex-col items-start w-full gap-3">
                            <label>Supplier</label>
                            <input type="text" className="p-4 rounded-md w-full md:w-11/12  mr-0" name="Supplier" placeholder="Supplier" />
                        </div>
                        <div className="flex flex-col items-start w-full gap-3">
                            <label>Taste</label>
                            <input type="text" className="p-4 rounded-md w-full md:w-11/12  mr-0" name="Taste" placeholder="Taste" />
                        </div>
                        <div className="flex flex-col items-start w-full gap-3">
                            <label>Category</label>
                            <input type="text" className="p-4 rounded-md w-full md:w-11/12  mr-0" name="Category" placeholder="Category" />
                        </div>
                        <div className="flex flex-col items-start w-full gap-3">
                            <label>Details</label>
                            <input type="text" className="p-4 rounded-md w-full md:w-11/12  mr-0" name="Details" placeholder="Details" />
                        </div>
                    </div>
                    <div className="md:pr-10">
                        <div className="flex flex-col items-start w-full gap-3 my-6">
                            <label>Photo</label>
                            <input type="text" className="p-4 rounded-md mr-0 w-full" name="Photo" placeholder="Photo" />
                        </div>
                    </div>
                    <div className="md:pr-10 mt-12">
                        <button className="btn btn-success w-full">ADD COFFEE</button>

                    </div>
                </form>
            </div>
        </div>
    )
}
