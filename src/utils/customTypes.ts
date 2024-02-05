import React from "react";

export type Card = {
    title: string,
    text: string,
    primaryButtonText: string,
    secondaryButtonText: string
    children: React.ReactNode
}