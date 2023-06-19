'use client';

import { useState } from "react";
import { useForm } from "react-hook-form";

import Input from "@/app/components/Input";
import Wrapper from "@/app/components/Wrapper";
import Button from "@/app/components/Button";
import Select from "@/app/components/Select";

const study = [
    { value: '', label: 'Select Study Type' },
    { value: 'bachelor', label: 'Bachelor' },
    { value: 'master', label: 'Master' },
    { value: 'p.hd', label: 'P.hD' }
]

const scholarship = [
    { value: '', label: 'Select Scholarship Type' },
    { value: 'full', label: 'Full' },
    { value: 'partial', label: 'Partial' },
    { value: 'assistanship', label: 'Assistanship' }
]

const status = [
    { value: '', label: 'Select Application Status' },
    { value: 'pending', label: 'Pending' },
    { value: 'approved', label: 'Approved' },
    { value: 'rejected', label: 'Rejected' }
]



export default function page() {
    const [loading, setLoading] = useState(false);

    const { register, handleSubmit, formState: {
        errors,
    } } = useForm({
        defaultValues: {
            studyType: '',
            school: '',
            state: '',
            country: '',
            scholarshipType: '',
            status: '',
        }
    })

    const onSubmit = (data) => {
        setLoading(true)
        console.log(data)
        setLoading(false)
    }
    return (
        <div>
            <Wrapper>
                <div className="
                            w-[600px]
                            max-w-full">
                    <div
                        className="
                            text-3xl
                            font-[500]
                            capitalize
                            mb-6
                        "
                    >
                        add scholarship
                    </div>
                    <form
                        className="
                            flex 
                            flex-col
                            gap-6
                        "
                    >
                        <Select
                            options={study}
                            register={register}
                            id='studyType'
                            disabled={loading}
                            errors={errors}
                            required
                        />
                        <Select
                            options={scholarship}
                            register={register}
                            id='scholarshipType'
                            disabled={loading}
                            errors={errors}
                            required
                        />
                        <Input
                            type='text'
                            register={register}
                            id='school'
                            disabled={loading}
                            label='School'
                            errors={errors}
                            required
                        />
                        <Input
                            type='text'
                            register={register}
                            id='state'
                            disabled={loading}
                            label='State'
                            errors={errors}
                            required
                        />
                        <Input
                            type='text'
                            register={register}
                            id='country'
                            disabled={loading}
                            label='Country'
                            errors={errors}
                            required
                        />
                        <Select
                            options={status}
                            register={register}
                            id='status'
                            disabled={loading}
                            errors={errors}
                            required
                        />
                        <Button
                            text='add scholarship'
                            disabled={loading}
                            onClick={handleSubmit(onSubmit)}
                        />
                    </form>
                </div>
            </Wrapper>
        </div>
    )
}
