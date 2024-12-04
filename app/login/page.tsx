import React from "react";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card"; // Adjust the path if needed
import { Label } from "@/components/ui/label"; // Adjust the path
import { Input } from "@/components/ui/input"; // Adjust the path
import { Button } from "@/components/ui/button"; // Adjust the path

export default function Login() {
    return (
        <div className="flex h-screen w-full items-center justify-center px-4">
            <Card className="max-w-sm">
                <CardHeader>
                    <CardTitle className="text-2xl">Login</CardTitle>
                    <CardDescription>
                        Enter your email below to log in to your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="flex flex-col gap-y-4">
                        <div className="flex flex-col gap-y-2">
                            <Label>Email</Label>
                            <Input placeholder="abc@abc.com" />
                        </div>
                        <Button>Submit</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
