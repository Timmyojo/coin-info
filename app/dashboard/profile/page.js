'use client';

import { useState } from "react";
import { useForm } from "react-hook-form";

import Avatar from "@/app/components/dashboard/Avatar";
import Input from "@/app/components/Input";
import Wrapper from "@/app/components/Wrapper";
import Button from "@/app/components/Button";



export default function page() {
    const [loading, setLoading] = useState(false);

    const { register, handleSubmit, formState: {
        errors,
    } } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            location: '',
        }
    })

    const onSubmit = (data) => {
        setLoading(true)
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
                            font-[600]
                            capitalize
                        "
                    >
                        account settings
                    </div>
                    <form
                        className="
                            flex 
                            flex-col
                            gap-6
                        "
                    >
                        <div
                            className="
                            my-5
                        ">
                            <div
                                className="
                                    font-[500]
                                    text-[26px]
                                    capitalize
                                "
                            >
                                profile
                            </div>
                            <div
                                className="
                                    text-neutral-400
                                    text-xl
                                    mt-2
                                "
                            >
                                Update your contact and personal details here.
                            </div>
                        </div>
                        <div className="w-20">
                            <input type="file" name="file" id="file" hidden />
                            <label htmlFor="file">
                                <Avatar src={'/tim.jpg'} upload />
                            </label>
                        </div>
                        <Input
                            type='text'
                            register={register}
                            id='firstName'
                            disabled={loading}
                            label='First Name'
                            errors={errors}
                            required
                        />
                        <Input
                            type='text'
                            register={register}
                            id='lastName'
                            disabled={loading}
                            label='Last Name'
                            errors={errors}
                            required
                        />
                        <Input
                            type='email'
                            register={register}
                            id='email'
                            disabled={loading}
                            label='Email'
                            errors={errors}
                            required
                        />
                        <Input
                            type='text'
                            register={register}
                            id='location'
                            disabled={loading}
                            label='Location'
                            errors={errors}
                            required
                        />
                        <Button
                            text='save changes'
                            disabled={loading}
                            onClick={handleSubmit(onSubmit)}
                        />
                    </form>
                </div>
            </Wrapper>
        </div>
    )
}
