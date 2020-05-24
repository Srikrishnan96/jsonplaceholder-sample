import { observable, action, decorate } from 'mobx';
import React from 'react';

class AppStore {

    usersData: Array<any> = [];
    postsData: Array<any> = [];
    snackbarFlag = false;
    user: Record<string, string | number| null | Array<any>> = { id: null, posts: [], name: '' }
    postsDispFlag = false;
    pageLoaderFlag = false;

    pageLoaderFlagControl(flag: boolean): void {
        this.pageLoaderFlag = flag;
    }
    postsDispFlagControl(flag: boolean): void {
        this.postsDispFlag = flag;
    }
    snackbarControl(flag: boolean): void {
        this.snackbarFlag = flag;
    }
    userControl(prop: 'id' | 'posts' | 'name', value: string | number | Array<any>): void {
        this.user[prop] = value;
        if(prop === 'posts') this.postsDispFlagControl(true);
    }
    async getUsersData(): Promise<void> {
        try {
            this.pageLoaderFlagControl(true);
            const resp = await fetch('https://jsonplaceholder.typicode.com/users');
            this.usersData = await resp.json();
            this.pageLoaderFlagControl(false);
        } catch(err) {
            console.error(err);
            this.pageLoaderFlagControl(false);
        }
    }
    async getPostsData(): Promise<void> {
        try {
            this.pageLoaderFlagControl(true);
            const resp = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${this.user.id}`);
            const posts = await resp.json()
            this.userControl('posts', posts);
            this.pageLoaderFlagControl(false);
        } catch(err) {
            console.error(err);
            this.pageLoaderFlagControl(false);
        }
    }

}

const observables = {
    usersData: observable,
    postsData: observable,
    user: observable,
    postsDispFlag: observable,
    pageLoaderFlag: observable,
}

const actions = {
    getUsersData: action,
    getPostsData: action,
}

export type $AppStore = AppStore;

decorate(AppStore, {
    ...observables, ...actions
});

export const AppStoreContext = React.createContext(new AppStore());