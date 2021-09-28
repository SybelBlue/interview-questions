{- Your boss tells you that you will be working on the new
   front end in a language you've not seen before.

   The app is currently an input box, a div, and a button.

   The contents of the box are reversed and displayed in
   the div, and the button will reset the contents to "".

   Your boss asks you to make it so the starting text of
   the box is "Reverse Text Here!".

   Please talk through your thoughts out loud.

   No time limit.
-}

module Main exposing (..)

import Browser
import Html exposing (Html, Attribute, button, div, input, text)
import Html.Attributes exposing (..)
import Html.Events exposing (onInput, onClick)


-- MAIN

main =
  Browser.sandbox { init = init, update = update, view = view }


-- MODEL

type alias Model =
  { content : String
  }

init : Model
init =
  { content = "" }


-- CONTROLLER

type Msg
  = Change String
  | Clear

update : Msg -> Model -> Model
update msg model =
  case msg of
    Change newContent ->
      { model | content = newContent }
    
    Clear ->
      init


-- VIEW

view : Model -> Html Msg
view model =
  div []
    [ input [ placeholder "Text to reverse", value model.content, onInput Change ] []
    , div [] [ text (String.reverse model.content) ]
    , button [ onClick Clear ] [ text "Clear Text" ]
    ]
