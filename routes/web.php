<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/',"HomeController@index");

Auth::routes();

//Route::get('/admin', 'Admin\HomeController@index')->name('admin.home');


//Queste informazioni in pratica servono alle rotte che potrei avere per evitare ridondanti specificazioni
Route::middleware("auth")->namespace("Admin")->prefix("admin")->name("admin.")

    ->group(function () {
        Route::get('/','HomeController@index')->name('home')->middleware('auth');
        Route::get('/posts','PostController@index')->name('post.index')->middleware('auth');
        Route::get('/products','ProductController@index')->name('product.edit')->middleware('auth');
});

Route::get("{any?}",function(){
    return view("guest.home");
})->where("any",".*");