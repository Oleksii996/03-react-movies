import { useState } from "react";
import css from "./App.module.css";
import CafeInfo from "../Loader/Loader";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";
import Notification from "../MovieGrid/MovieGrid";
import type { Votes } from "../../types/votes";

type VoteType = keyof Votes;
